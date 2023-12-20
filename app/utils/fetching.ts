import { DevPosts } from '@/app/types/posts'
import { Repos } from '@/app/types/repos'
import {formatDate} from '@/app/utils/formatter'

export async function getPosts(): Promise<{posts:DevPosts[], tags:string[]}>{
    let allPosts: DevPosts[] = [];
    let allTags: string[] = [];

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

                for(let tag of post.tag_list){
                    if(!allTags.includes(tag)) allTags.push(tag)
                }
            }

        }).catch(() => {
            console.warn("Void Posts.")
        })

    return {posts: allPosts, tags: allTags};
}

export async function getProjects(): Promise<{repos: Repos[], topics:string[]}> {
    let allRepos: Repos[] = [];
    let allTopics: string[] = [];

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

                for(let topic of repo.topics){
                    if(!allTopics.includes(topic)) allTopics.push(topic)
                }
            }
        }).catch(() => {
            console.warn("Void Repos.")
        })

    
    return {repos: allRepos.sort((a,b) => b.stars - a.stars), topics: allTopics};
}