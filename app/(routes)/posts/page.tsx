"use client"
import {DevPosts} from '@/app/types/posts'

async function getData() : Promise<DevPosts[]> {
    let allPosts : DevPosts[] = [];
    
    await fetch("https://dev.to/api/articles/latest?username=akadot_")
    .then(async (res) => {
        let content = await res.json();
        
        for(let post of content)
        {
            allPosts.push({
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
                        <section key={item.url}>
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                            <p>{item.tags}</p>
                            <p>{item.img}</p>
                            <p>{item.url}</p>
                            <p>{item.lang}</p>
                        </section>
                    );
                })}
            </section>
        </>
    )
}