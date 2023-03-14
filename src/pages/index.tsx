import Head from 'next/head'
import { Button } from '@chakra-ui/react'
import ApercuPro from 'next/font/local'

import { Layout } from '@/components/Layout'

const apercuPro = ApercuPro({
  src: './fonts/apercu_pro.otf'
})

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Blooming🌸</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={apercuPro.className}>
        <Layout>
          <Button colorScheme="blue">Button</Button>
        </Layout>
      </main>
    </>
  )
}
