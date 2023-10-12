import Link from 'next/link';
import { TbBrandMedium, TbBrandLinkedin, TbAt} from 'react-icons/tb'
import {LiaDev, LiaGithub} from 'react-icons/lia'

import styles from '@/app/styles/components/socials.module.scss'

export default function Page(){
    return(
        <nav className={styles.container}>
            <Link href="https://github.com/akadot" target='_blank' title='open source codes'><LiaGithub size='1.8rem' /></Link>
            <Link href="https://dev.to/akadot_" target='_blank' title='dev articles'><LiaDev size='1.8rem'/></Link>
            <Link href="https://medium.com/@akadot_" target='_blank' title='general articles'><TbBrandMedium size='1.8rem'/></Link>
            <Link href="https://www.linkedin.com/in/murilo-o/" target='_blank' title='professional me'><TbBrandLinkedin size='1.8rem'/></Link>
            <Link href="mailto:muriloholiveira@hotmail.com" title='mail me'><TbAt size='1.8rem'/></Link>
        </nav>
    );
}