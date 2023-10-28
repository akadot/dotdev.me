import Link from 'next/link';
import {TbBrandMedium, TbBrandLinkedin, TbAt} from 'react-icons/tb'
import {LiaGithub} from 'react-icons/lia'
import {PiDevToLogo} from 'react-icons/pi'

import styles from '@/app/styles/components/socials.module.scss'

export default function Page(){
    return(
        <nav className={styles.container}>
            <Link href="https://github.com/akadot" target='_blank' title='open source codes'><LiaGithub size='2rem' /></Link>
            <Link href="https://dev.to/akadot_" target='_blank' title='dev articles'><PiDevToLogo size='2rem'/></Link>
            <Link href="https://medium.com/@akadot_" target='_blank' title='general articles'><TbBrandMedium size='2rem'/></Link>
            <Link href="https://www.linkedin.com/in/murilo-o/" target='_blank' title='professional me'><TbBrandLinkedin size='2rem'/></Link>
            <Link href="mailto:muriloholiveira@hotmail.com" title='mail me'><TbAt size='2rem'/></Link>
        </nav>
    );
}