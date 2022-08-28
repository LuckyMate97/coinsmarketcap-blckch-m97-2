import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Trending from "../components/Trending";
import CMCTable from "../components/cmc-table/CmcTable";
import SwapCryptoModal from "../components/SwapCryptoModal";


const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      {/** header */}
      <Header />
      <SwapCryptoModal />
      <div className='mt-10' />
      { /**  trendings */}
      <Trending />
      <div className='mt-20' />
      <CMCTable />
    </div>
  )
}

export default Home
