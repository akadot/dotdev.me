import { Metadata } from 'next'

import '@/app/styles/globals.scss'

import Header from '@/app/components/Header'
// import Cursor from '@/app/components/Cursor'


export const metadata: Metadata = {
  title: 'dot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const currYear = new Date().getFullYear();

  return (
    
    <html lang="pt-br">
      <body>
          <Header/>
          {children}
          <span>made with 🌻 ☕ 🎧 💖 by myself ©{currYear}</span>
          {/* <Cursor/> */}
        </body>
    </html>
  )
}
