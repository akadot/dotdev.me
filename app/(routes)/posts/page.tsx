import Image from 'next/image'
import Link from 'next/link';

import {DevPosts} from '@/app/types/posts'

import utils from '@/app/styles/utils/cards.module.scss'
import styles from '@/app/styles/pages/posts.module.scss'

async function getData() : Promise<DevPosts[]> {
    let allPosts : DevPosts[] = [];
    
    await fetch("https://dev.to/api/articles/latest?username=akadot_")
    .then(async (res) => {
        let content = await res.json();
        
        for(let post of content)
        {
            allPosts.push({
                id: post.id,
                title: post.title,
                date: post.published_timestamp,
                tags: post.tag_list,
                img: post.cover_image,
                url: post.url,
                lang: post.description.includes("PT-BR") ? 'pt-br' : 'en-us'
            })
        }

    }).catch(() => {
        console.warn("Void Posts.")
    })

    return allPosts;
}

export default async function Page(){
    const posts = await getData();
    
    return (
        <>
            <h1>Posts</h1>
            <section className={styles.container}>
                {posts.map(item => {
                    return (
                        <Link key={item.id} className={utils.post_container} href={item.url} target='_blank'>
                            <h2>{item.title}</h2>
                            <span>{item.date}</span>
                            <section className={utils.tag_list}>
                                {item.tags.map(tag => <p className={utils.tag} key={tag}>{tag}</p>)}
                            </section>
                            {/* <Image src={item.img} alt="Picture of the author" width={150} height={150} unoptimized/> */}
                            <p>{item.lang}</p>
                        </Link>
                    );
                })}
            </section>
        </>
    )
}