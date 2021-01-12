import React from 'react';
import Head from '../components/head';

export default function Layout({ children, title, desc, url }) {
  return (
    <>
      <Head title={title} description={desc} url={url} />
      <main>{children}</main>
    </>
  );
}
