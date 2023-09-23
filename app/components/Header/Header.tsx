'use client'
import Link from 'next/link'

import {Container, Menu, Title} from '@/app/styles/components/header'

export default function Header() {
    return (
        <Container>
            <Title href="/">dot</Title>
            <Menu>
                <Link href="/me">me</Link>
                <Link href="/posts">posts</Link>
                <Link href="/projects">projects</Link>
                <Link href="/tetris">tetris</Link>
            </Menu>
            <p>pt | en</p>
        </Container>
    )
}