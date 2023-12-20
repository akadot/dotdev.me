'use client'
import { useState } from 'react';
import Link from 'next/link';

import {getPosts} from '@/app/utils/fetching'
import { HiOutlineLanguage, HiOutlineClock } from 'react-icons/hi2'
import styles from '@/app/styles/pages/posts.module.scss'

export default async function Page() {
    const {posts, tags} = await getPosts();

    const [filtered, setFiltered] = useState(posts);

    const FilterPosts = (filter : string) : void => {
        if(filter == "all") setFiltered(posts);
        
        if(tags.includes(filter)){
            let postsFound = posts.filter(item => item.tags.includes(filter));

            if(postsFound.length > 0) setFiltered(postsFound);
        }
    }

    return (
        <main className={styles.container}>
            <p>📝 Some cool description.</p>
            <section className={styles.filters}>
                <span onClick={() => FilterPosts("all")}>All</span>
                {tags.map((tag, idx) => 
                    {
                        return (
                            <span key={`${idx}-${tag}`} onClick={() => FilterPosts(tag)}>{tag}</span>
                        )
                    })}
            </section>
            <section className={styles.posts_list}>
                {filtered.map(item => {
                    return (
                        <Link key={item.id} className={styles.post} href={item.url} target='_blank'>
                            <h2>{item.title}</h2>

                            <section className={styles.info}>
                                <section className={styles.tag_list}>
                                    {item.tags.map(tag => <p className={styles.tag} key={tag}>{tag}</p>)}
                                </section>
                                <section className={styles.metadata}>
                                    <p><HiOutlineLanguage /> {item.lang}</p>
                                    <p><HiOutlineClock /> {item.date}</p>
                                </section>
                            </section>


                        </Link>
                    );
                })}
            </section>
        </main>
    )
}