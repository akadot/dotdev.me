'use client'
import Link from 'next/link';
import { useState } from 'react';

import {getProjects} from '@/app/utils/fetching'
import { HiOutlineStar, HiMiniCodeBracket } from 'react-icons/hi2'
import styles from '@/app/styles/pages/projects.module.scss'

export default async function Page() {

    const {repos, topics} = await getProjects();

    const [filtered, setFiltered] = useState(repos);

    const FilterRepos = (filter : string) : void => {
        if(filter == "all") setFiltered(repos);
        
        if(topics.includes(filter)){
            let reposFound = repos.filter(item => item.topics.includes(filter));

            if(reposFound.length > 0) setFiltered(reposFound);
        }
    }

    return (
        <main className={styles.container}>
            <p>💡 Some cool description.</p>
            <section className={styles.filters}>
                <span onClick={() => FilterRepos("all")}>All</span>
                {topics.map((topic, idx) => 
                    {
                        return (
                            <span key={`${idx}-${topic}`} onClick={() => FilterRepos(topic)}>{topic}</span>
                        )
                    })}
            </section>
            <section className={styles.projects_list}>
                {filtered.map(item => {
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