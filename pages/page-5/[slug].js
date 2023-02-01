import React from 'react'
import { useRouter } from 'next/router'
import ProjectsData from '@/components/page5/static-data';
import { PageHeader } from '@/components/page5/PageHeader';
import { SlicesLayout } from '@/components/page5/SlicesLayout';

export default function Post({ post }) {

  return (
    <>
      <div className="pt-[100px] spacer">

      </div>
      <PageHeader post={post} />
      <SlicesLayout slices={post.slices} post={post} />
    </>
  );
}

export async function getStaticPaths() {
  const posts = ProjectsData;
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = ProjectsData.find((p) => p.slug === slug);

  return {
    props: { post }
  };
}
