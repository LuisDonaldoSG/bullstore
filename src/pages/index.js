import {dbConnect} from '../config/database'
import ProductList from '@containers/ProductList';
import Head from 'next/head';
import React from 'react'


export async function getServerSideProps(context) {
  console.log(context);
  dbConnect()

  return {
    props: {},
  }

}

export default function Home() {

  return (
    <>
      <Head>
        <title>Bullstore</title>
      </Head>
      <ProductList/>
    </>
  );
}
  