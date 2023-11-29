import Socials from '@/app/components/Socials'

import styles from '@/app/styles/pages/me.module.scss'

export default function Page() {
  return (
    <main className={styles.container}>
      <section className={styles.about}>
        <p>Hi, I&apos;m <strong> Murilo Oliveira</strong>.</p>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, <strong>cursus</strong> quis, vehicula ac nisi. Praesent vel viverra nisi. Mauris aliquet <strong>nunc</strong>, <strong>nan</strong>, <strong>amis</strong> non turpis scelerisque, eget. Quem num gosta di mim que vai caçá sua turmis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.</p>
        <p>Mais vale um bebadis conhecidiss, que um <strong>solis</strong> alcoolatra anonimis. Cevadis im ampola pa arma uma pindureta. Atirei o pau no gatis, per gatis num morreus. Per aumento <strong>derila</strong> de cachacis, eu reclamis.</p>
        <Socials />
      </section>
      <section>
        <p>studies lists</p>
      </section>
    </main>
  )
}