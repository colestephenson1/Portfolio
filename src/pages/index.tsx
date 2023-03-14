import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/Layout/Layout'
import HomePage from '@/HomePage/HomePage'

export default function Home() {
  return (
    <Layout>
      <HomePage/>
    </Layout>
  )
}
