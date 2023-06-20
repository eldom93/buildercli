// pages/your-page.jsx
import React from 'react'
// import { builder } from '@builder.io/react';
import { builder } from '@builder.io/sdk'
// Replace with your Public API Key.
// builder.init("79f07ebfb33941cb96e9babd569e83d8");

export async function getStaticProps() {
  const links = await builder.get('nav-link', {
    // You can use options for queries, sorting, and targeting here
    // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
  }).promise();

  return {
    props: {
      links: links || null,
    },
    revalidate: 5,
  };
}

export default function Test({ links }) {
    console.log(links);
  return (
    <>
      <header>
        <nav>
         {links?.data?.links?.map((link, index) => (
            <a key={index} href={link.data.url}>
              {link.data.label}
            </a>
          ))} 
        </nav>
      </header>
      {/* Put the rest of your page here. */}
    
    </>
  );
}