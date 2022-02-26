import Head from 'next/head';
import Feature from '../components/feature/Feature';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Accordion from '../components/accordion/Accordion';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Netflix clone</title>
        <meta name="description" content="Watch Netflix films &amp;TV programmes online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Feature/>
        <Jumbotron/>
        <Accordion/>
      </main>
    </div>
  )
}