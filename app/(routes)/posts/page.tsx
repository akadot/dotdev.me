"use client"
import Image from 'next/image'
import {DevPosts} from '@/app/types/posts'

import utils from '@/app/styles/utils/cards.module.scss'

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
            <section>
                {posts.map(item => {
                    return (
                        <section key={item.id} className={utils.post_container}>
                            <h2>{item.title}</h2>
                            <span>{item.date}</span>
                            <p>{item.tags}</p>
                            <Image src={item.img} alt="Picture of the author" width={150} height={150} unoptimized/>
                            <p>{item.url}</p>
                            <p>{item.lang}</p>
                        </section>
                    );
                })}
            </section>
        </>
    )
}