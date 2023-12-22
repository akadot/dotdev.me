'use client'
import Link from 'next/link';
import { useState } from 'react';

import { Repos } from '@/app/types/repos'
import { HiOutlineStar, HiMiniCodeBracket } from 'react-icons/hi2'

import styles from '@/app/styles/pages/projects.module.scss'

interface RepoProps{
    reposList: Repos[],
    languages: string[]
}

export default function Repos(props:RepoProps){
    const [filtered, setFiltered] = useState(props.reposList);

    const FilterRepos = (filter : string) : void => {
        if(filter == "all") setFiltered(props.reposList);
        
        if(props.languages.includes(filter)){
            let reposFound = props.reposList.filter(item => item.language == filter);

            if(reposFound.length > 0) setFiltered(reposFound);
        }
    }
    return (
        <>
        <section className={styles.lang_filter}>
                <span onClick={() => FilterRepos('all')}>All</span>
                {props.languages.map((lang, idx) => 
                    {
                        return (
                            <span key={`${idx}-${lang}`} onClick={() => FilterRepos(lang)}>{lang}</span>
                        )
                    })}
            </section>
            <section className={styles.projects_list}>
                {filtered.map(item => {
                    return (
                        <Link href={item.url} key={item.id} className={styles.project} target='_blank'>
                            <section className={styles.info}>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </section>

                            <section className={styles.metadata}>
                                <p><HiMiniCodeBracket/> {item.language}</p>
                                <p><HiOutlineStar/> {item.stars}</p>
                            </section>
                                
                        </Link>
                    );
                })}
            </section>
        </>
    )
}