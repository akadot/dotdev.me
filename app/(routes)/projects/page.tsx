"use client"
import { Repos } from '@/app/types/repos'

async function getData(): Promise<Repos[]> {
    let allRepos: Repos[] = [];

    await fetch("https://api.github.com/users/akadot/repos")
        .then(async (res) => {
            let content = await res.json();

            for (let repo of content) {
                allRepos.push({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    language: repo.language,
                    stars: repo.stargazers_count,
                    topics:repo.topics,
                    url: repo.html_url,
                })
            }



        }).catch(() => {
            console.warn("Void Repos.")
        })

    return allRepos;
}

export default async function Page() {
    const repos = await getData();
    return (
        <>
            <h1>Projects</h1>
            <section>
                {repos.map(item => {
                    return (
                        <section key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.language}</p>
                            <p>{item.stars}</p>
                            <p>{item.topics}</p>
                            <p>{item.url}</p>
                        </section>
                    );
                })}
            </section>
        </>
    )
}