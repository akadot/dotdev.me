import {getPosts} from '@/app/utils/fetching'
import {  } from 'react-icons/hi2'
import styles from '@/app/styles/pages/posts.module.scss'
import Posts from '@/app/components/Posts';

export default async function Page() {
    const posts = await getPosts();
    return (
        <main className={styles.container}>
            <p>📝 Some cool description.</p>
            <Posts posts={posts}/>
        </main>
    )
}