import React from 'react'

export const PageHeader = ({post}) => {
  return (
    <>
        <div className="page-header max-w-screen-xl mx-auto py-[50px]">
            <h1 className="font-bold text-5xl post-title mb-[20px]">{post.title}</h1>
            <div className="text-[18px] post-description" dangerouslySetInnerHTML={{__html: post.description}} />
        </div>
    </>
  )
}
