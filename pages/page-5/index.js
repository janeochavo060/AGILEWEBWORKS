import React from 'react'
import ProjectsData from '@/components/page5/static-data'
import Link from 'next/link'

const index = ({projects}) => {
  return (
    <>
      <h1 className="pt-[100px] font-bold text-[50px]">
        {'Mobile Apps & Software'}
      </h1>
      {projects.map((project, index) => (
        <h2 key={index}>
          <Link className="font-bold text-[30px]" href={`/page-5/` + project.slug}>
              {project.title}
          </Link>
        </h2>
      ))}
    </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
 

  const projects = ProjectsData;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
    },
  }
}

export default index