import Link from 'next/link';
import { HiOutlineLanguage, HiOutlineClock } from 'react-icons/hi2'

import { DevPosts } from '@/app/types/posts'
import {formatDate} from '@/app/utils/formatter'

import styles from '@/app/styles/pages/posts.module.scss'

async function getData(): Promise<DevPosts[]> {
    let allPosts: DevPosts[] = [];

    await fetch("https://dev.to/api/articles/latest?username=akadot_")
        .then(async (res) => {
            let content = await res.json();

            for (let post of content) {
                allPosts.push({
                    id: post.id,
                    title: post.title,
                    date: formatDate(post.published_timestamp),
                    tags: post.tag_list,
                    url: post.url,
                    lang: post.description.includes("PT-BR") ? 'br' : 'en'
                })
            }

        }).catch(() => {
            console.warn("Void Posts.")
        })

    return allPosts;
}

export default async function Page() {
    const posts = await getData();

    return (
        <main className={styles.container}>
            <p>📝 Some cool description.</p>
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