import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { DatePicker } from "antd";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <p>{t('hello')}</p>
      <DatePicker />
    </div>
  )
}

export const getStaticProps = async ({ locale }: { locale: string}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}


export default Home
