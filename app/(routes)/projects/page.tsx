import Link from 'next/link';
import { HiOutlineStar, HiMiniCodeBracket } from 'react-icons/hi2'

import { Repos } from '@/app/types/repos'

import styles from '@/app/styles/pages/projects.module.scss'

async function getData(): Promise<Repos[]> {
    let allRepos: Repos[] = [];

    await fetch("https://api.github.com/users/akadot/repos")
        .then(async (res) => {
            let content = await res.json();

            for (let repo of content) {
                allRepos.push({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    language: repo.language,
                    stars: Number(repo.stargazers_count),
                    topics:repo.topics,
                    url: repo.html_url,
                })
            }
        }).catch(() => {
            console.warn("Void Repos.")
        })
    return allRepos.sort((a,b) => b.stars - a.stars);
}

export default async function Page() {
    const repos = await getData();
    return (
        <main className={styles.container}>
            <p>💡 Some cool description.</p>
            <section className={styles.projects_list}>
                {repos.map(item => {
                    return (
                        <Link href={item.url} key={item.id} className={styles.project} target='_blank'>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>

                            <section className={styles.topics_list}>
                                {item.topics.map(topic => <p className={styles.topic} key={topic}>{topic}</p>)}
                            </section>

                            <section className={styles.metadata}>
                                <p><HiMiniCodeBracket/> {item.language}</p>
                                <p><HiOutlineStar/> {item.stars}</p>
                            </section>
                                
                        </Link>
                    );
                })}
            </section>
        </main>
    )
}