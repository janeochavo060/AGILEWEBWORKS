import Head from 'next/head';
import { useContext } from "react";
import { GlobalContext } from "@/lib/context/GlobalContext";
export default function Header ({meta}) {
  const { tenantDetails } = useContext(GlobalContext);
  const defaultMeta = tenantDetails?.data?.meta_data;
  const imageDomain = 'https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate'

  const findMeta = (type) => {
    switch (type) {
      case 'title':
        return meta?.title || defaultMeta?.title || process.env.NEXT_PUBLIC_APP_NAME
      case 'description':
        return meta?.description || defaultMeta?.description || process.env.NEXT_PUBLIC_APP_NAME
      case 'image':
        return meta?.image ? `${imageDomain}/${meta?.image}` : (defaultMeta?.image ? `${imageDomain}/${defaultMeta?.image}` : '/website.png')
      case 'ico':
        return defaultMeta?.ico ? `${imageDomain}/${defaultMeta?.ico}` : '/favicon.ico'
      case 'author':
        return meta?.author || defaultMeta?.author || process.env.NEXT_PUBLIC_APP_NAME
      case 'keywords':
        return meta?.keywords || defaultMeta?.keywords || process.env.NEXT_PUBLIC_APP_NAME
      case 'url':
        return process.env.NEXT_PUBLIC_SITE_URL
    }
  }

  const imageType = () => {
    const image = meta?.image ? `${meta?.image}` : (defaultMeta?.image ? `${defaultMeta?.image}` : '/website.png')
    return image.split('.')[1]
  }

  return (
    <Head>
      
      <link rel="icon" href={findMeta('ico')} />
      <title>{findMeta('title')}</title>
      <meta name="description" content={findMeta('description')} />
      <meta name="author" content={findMeta('author')} />
      <meta name="keywords" content={findMeta('keywords')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="url" property="og:url" content={findMeta('url')}/>
      <meta name="site_name" property="og:site_name" content={findMeta('title')}/>
      <meta name="description" property="og:description" content={findMeta('description')} />
      <meta name="secure_url" property="og:image:secure_url" content={findMeta('image')} />
      <meta name="image" property="og:image" content={findMeta('image')} />
      <meta name="type" property="og:image:type" content={imageType()} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={findMeta('title')} />
      <meta name="twitter:creator" content={findMeta('author')} />
      <meta name="twitter:title" content={findMeta('title')} />
      <meta name="twitter:description" content={findMeta('description')} />
      <meta name="twitter:image" content={findMeta('image')} />
      <meta name="twitter:domain" content={findMeta('url')} />

    </Head>
  )
}