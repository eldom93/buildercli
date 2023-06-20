import Layout from '../components/Layout'
import React from 'react'
import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic'
import '../styles/global.css'


Builder.registerComponent(
  dynamic(() => import("../components/heading")), 
  {
      name: 'Heading',
      inputs:[{name: 'title', type:'text'}],
      image:'https://tabler-icons.io/images/builder/heading.png',
  }
);
Builder.registerComponent(
  dynamic(() => import("../components/nav")), 
  {
      name: 'Nav',
      inputs:[{name: 'title', type:'text'}],
      image:'https://tabler-icons.io/images/builder/heading.png',
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp