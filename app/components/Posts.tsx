'use client'
import Link from 'next/link';
import { useState } from 'react';

import { DevPosts } from '@/app/types/posts'

import { HiOutlineLanguage, HiOutlineClock, HiMiniMagnifyingGlass } from 'react-icons/hi2'

import styles from '@/app/styles/pages/posts.module.scss'

interface PostsProps {
    posts: DevPosts[]
}

export default function Posts(props: PostsProps) {
    const [filtered, setFiltered] = useState(props.posts);

    const FilterProjects = (filters: React.FormEvent<HTMLInputElement>) => {
        if (!filters.currentTarget || filters.currentTarget.value) setFiltered(props.posts);

        const foundPosts = props.posts.filter(item => 
            item.title.toLowerCase().includes(filters.currentTarget.value.toLowerCase()) ||
            item.tags.join(" ").includes(filters.currentTarget.value) || 
            item.tags.includes(filters.currentTarget.value.toLowerCase()) ||
            item.tags.includes(filters.currentTarget.value) ||
            item.lang.includes(filters.currentTarget.value.toLowerCase()));

        if (foundPosts.length > 0) setFiltered(foundPosts);
    }

    return (
        <>
            <section className={styles.post_search}>
                <input type="text" name="post_search" placeholder='Search posts...' onChange={FilterProjects} />
                <HiMiniMagnifyingGlass size="1.5rem" />
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
        </>
    )
}
