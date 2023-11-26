import React from 'react'
import { blogData } from '../page'

export default function page({ params }: { params: { slug: string } }) {

    const selectedBlog = blogData.find((blog) => blog.slug === params.slug);

  return (
    <section className='text-center'>
        <div className='text-3xl  font-bold'>Blog Title:{selectedBlog?.slug}</div>
        <div className='flex justify-center'>

        <div className='text-xl  mt-2  w-[60%]'>{selectedBlog?.content}</div>
        </div>
    </section>
  )
}
