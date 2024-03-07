import { getProjects } from '@/app/utils/fetching'
import styles from '@/app/styles/pages/projects.module.scss'

import Repos from '@/app/components/Repos';

export default async function Page() {

    const { repos, langs } = await getProjects();

    return (
        <main className={styles.container}>
            <p>✨ Featured projects.</p>
            <section className={styles.featured_projects}>
                
            </section>
            <p>💡 Other cool ideas in progress.</p>
            <Repos reposList={repos} languages={langs} />
        </main>
    )
}