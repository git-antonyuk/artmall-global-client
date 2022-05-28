import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { DatePicker } from "antd";

const Home: NextPage = () => {
  return (
    <DatePicker />
  )
}

export default Home
