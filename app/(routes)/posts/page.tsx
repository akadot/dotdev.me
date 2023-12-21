import Link from 'next/link';

import {getPosts} from '@/app/utils/fetching'
import { HiOutlineLanguage, HiOutlineClock, HiMiniMagnifyingGlass } from 'react-icons/hi2'
import styles from '@/app/styles/pages/posts.module.scss'

export default async function Page() {
    const posts = await getPosts();
    return (
        <main className={styles.container}>
            <p>📝 Some cool description.</p>
            <section className={styles.post_search}>
               <input type="text" name="post_search" placeholder='Search posts...' />
               <HiMiniMagnifyingGlass size="1.5rem"/>
            </section>
            <section className={styles.posts_list}>
                {posts.map(item => {
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