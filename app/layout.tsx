'use client'
import { Lexend } from 'next/font/google'
import { Metadata } from 'next'
import StyledComponentsRegistry from './lib/registry'
 
import GlobalStyles from './styles/globals'
import Header from '@/app/components/Header/Header'

const font = Lexend({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt-br">
      <body className={font.className}>
      <StyledComponentsRegistry>
        <GlobalStyles/>
        <Header/>
        {children}
        <span>made with 🌻 ☕ 🎧</span>
      </StyledComponentsRegistry>
        </body>
    </html>
  )
}
