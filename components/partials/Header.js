import React, { useState, useEffect } from 'react';
import Head from 'next/head';
const Header = () => {
  return (
    <>
      <Head>
        <title>Cool Writings</title>
        <meta name="description" content="Cool Writings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default Header