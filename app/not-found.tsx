import Link from 'next/link';
import { TbArrowBackUp } from "react-icons/tb";
import { TfiBackLeft } from "react-icons/tfi";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function Loading() {
    return (
      <section className='not_found'>
        <h2  className="global">404 not found</h2>
        <Link href="/">back to home <FaArrowRotateLeft size="1.1rem"/></Link>
      </section>
    ) 
  }