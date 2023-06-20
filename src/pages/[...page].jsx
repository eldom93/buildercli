import Head from 'next/head'
import React from 'react'
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react'
import { useRouter } from 'next/router';
import { DefaultErrorPage } from '@builder.io/react'
import dynamic from 'next/dynamic'
import '../styles/global.css'
// import Footer from "../components/footer"

builder.init("79f07ebfb33941cb96e9babd569e83d8");

export async function getStaticProps({params}) {
    const page = await builder.get('page', {
        userAttributes: {
            urlPath: '/' + (params?.page?.join('/') || ''),
        }
    }).toPromise();
    return{
        props: {
            page: page || null,
        },
        revalidate: 5,
    };
}
export async function getStaticPaths() {
    const pages = await builder.getAll('page', {
    fields: 'data.url',
    options: {noTargeting:true},
    limit:0,
    });    
    return {
            paths: pages.map(page => `${page.data?.url}`),
            fallback: true,
        };
}

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

export default function Page({page}) {
    const router = useRouter();
    const isPreviewing = useIsPreviewing();
    if(router.isFallback){
        return <h1>Loading...</h1>
    }
    if(!page && !isPreviewing){
        return <DefaultErrorPage statusCode={404} />
    }
  
    return (
            <>
            <Head>
                <title>{page?.data?.title}</title>
            </Head>
            <BuilderComponent content={page} model="page" />
         
            </>
            );
            }