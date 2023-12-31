import style from '@/app/styles/components/featured.module.scss'
import Link from 'next/link'

interface FeaturedProps {
    title: string,
    url: string,
    img_url: string,
    repo_url: string,
    langs: string[],
}

export default function Featured(props: FeaturedProps) {
    return (
        <section className={style.container}>
            <section className={style.info}>
                <h1>{props.title}</h1>
                <section className={style.langs}>
                    {props.langs.map((lang, idx) => <span key={`${idx}-${lang}`}>{lang}</span>)}
                </section>
                <section className={style.links}>
                    <Link href={props.url}>View Project</Link>
                    <Link href={props.repo_url}>Source Code</Link>
                </section>
            </section>
            <section className={style.repo_img}>

            </section>
        </section>
    )
}