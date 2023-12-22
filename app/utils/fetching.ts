import { DevPosts } from '@/app/types/posts'
import { Repos } from '@/app/types/repos'
import {formatDate} from '@/app/utils/formatter'

export async function getPosts(): Promise<DevPosts[]>{
    let allPosts: DevPosts[] = [];

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
                
            }

        }).catch(() => {
            console.warn("Void Posts.")
        })

    return  allPosts;
}

export async function getProjects(): Promise<{repos: Repos[], langs:string[]}> {
    let allRepos: Repos[] = [];
    let allLangs: string[] = [];

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
                    url: repo.html_url,
                })

                if(!allLangs.includes(repo.language) && repo.language != '' && repo.language != null) allLangs.push(repo.language)
                
            }
        }).catch(() => {
            console.warn("Void Repos.")
        })

    
    return {repos: allRepos.sort((a,b) => b.stars - a.stars), langs: allLangs};
}