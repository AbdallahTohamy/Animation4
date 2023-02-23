import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/carousel'
import First from '../components/animation'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Animation Project</title>
        <meta name="description" content="Animate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider></Slider>
      <First></First>


    </>
  )
}
