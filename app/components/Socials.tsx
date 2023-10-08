import Link from 'next/link';
import {TbBrandGithub, TbBrandGithubFilled, TbBrandMedium, TbBrandLinkedin} from 'react-icons/tb'
import {LiaDev} from 'react-icons/lia'

export default function Page(){
    return(
        <nav>
            <Link href=""><TbBrandGithub size='1.5rem'/></Link>
            {/* <Link href=""><TbBrandGithubFilled/></Link> */}
            <Link href=""><LiaDev size='1.5rem'/></Link>
            <Link href=""><TbBrandMedium size='1.5rem'/></Link>
            <Link href=""><TbBrandLinkedin size='1.5rem'/></Link>
            <Link href="mailto:muriloholiveira@hotmail.com">Send me an email</Link>
        </nav>
    );
}