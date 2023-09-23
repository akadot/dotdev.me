//import {DevPosts} from '@/app/types/posts'

// async function getData() : Promise<DevPosts[]> {
//     const res = await fetch("https://dev.to/api/articles/latest?username=akadot_");

//     if(!res.ok){
//         console.error("AAAAAAAAAAAAA")
//         return [];
//     }

//     console.log(res.json)

//     let obj:DevPosts = {
//         date:"",
//         img:"",
//         lang:"",
//         tags:[""],
//         title:"",
//         url:"",
//     }

//     return [obj];
    
// }

export default async function Page(){
    //const posts = await getData();
    //console.log(posts)
    return (
        <h1>Posts</h1>
    )
}