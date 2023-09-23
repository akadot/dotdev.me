'use client'
import Socials from '@/app/components/Socials/Socials'
import {Container,About} from '@/app/styles/pages/me'

export default function Page() {
  return (
    <Container>
      <About>
        <p>hi, I'm <strong> Murilo Oliveira</strong>.</p>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Quem num gosta di mim que vai caçá sua turmis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.</p>
        <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Cevadis im ampola pa arma uma pindureta. Atirei o pau no gatis, per gatis num morreus. Per aumento de cachacis, eu reclamis.</p>
        <Socials />
      </About>
      <section>
        <p>img</p>
      </section>
    </Container>
  )
}