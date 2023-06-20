import Head from 'next/head'
import React from 'react'
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react'
import { useRouter } from 'next/router';
import { DefaultErrorPage } from '@builder.io/react'
import dynamic from 'next/dynamic'
import Home from "./test"
// import Footer from "../components/footer"
export async function getStaticProps() {
    const demo = await builder.get('demo', {
      // You can use options for queries, sorting, and targeting here
      // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
    }).promise();
  
    return {
      props: {
        demo: demo || null,
      },
      revalidate: 5,
    };
  }
  
  export default function Demo({ demo }) {
      console.log(demo);
    return (
      <>
       
      <h1>Demo Page</h1>
      </>
    );
  }