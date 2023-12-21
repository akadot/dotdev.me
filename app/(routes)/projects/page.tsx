import Link from 'next/link';
import {getProjects} from '@/app/utils/fetching'
import { HiOutlineStar, HiMiniCodeBracket } from 'react-icons/hi2'
import styles from '@/app/styles/pages/projects.module.scss'

export default async function Page() {

    const {repos, langs} = await getProjects();

    // const [filtered, setFiltered] = useState(repos);

    // const FilterRepos = (filter : string) : void => {
    //     if(filter == "all") setFiltered(repos);
        
    //     if(langs.includes(filter)){
    //         let reposFound = repos.filter(item => item.language == filter);

    //         if(reposFound.length > 0) setFiltered(reposFound);
    //     }
    // }

    return (
        <main className={styles.container}>
            <p>💡 Some cool description.</p>
            <section className={styles.lang_filter}>
                <span>All</span>
                {langs.map((lang, idx) => 
                    {
                        return (
                            <span key={`${idx}-${lang}`}>{lang}</span>
                        )
                    })}
            </section>
            <section className={styles.projects_list}>
                {repos.map(item => {
                    return (
                        <Link href={item.url} key={item.id} className={styles.project} target='_blank'>
                            <section className={styles.info}>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </section>

                            {/* <section className={styles.topics_list}>
                                {item.topics.map(topic => <p className={styles.topic} key={topic}>{topic}</p>)}
                            </section> */}

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