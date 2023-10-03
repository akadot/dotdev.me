import Link from 'next/link';
import {TbBrandGithub, TbBrandGithubFilled, TbBrandMedium, TbBrandLinkedin} from 'react-icons/tb'
import {LiaDev} from 'react-icons/lia'

export default function Page(){
    return(
        <nav>
            <Link href=""><TbBrandGithub/></Link>
            <Link href=""><TbBrandGithubFilled/></Link>
            <Link href=""><LiaDev/></Link>
            <Link href=""><TbBrandMedium/></Link>
            <Link href=""><TbBrandLinkedin/></Link>
            <Link href="mailto:muriloholiveira@hotmail.com">Send me an email</Link>
        </nav>
    );
}