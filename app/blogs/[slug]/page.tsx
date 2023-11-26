import { blogData } from '@/app/constants/blog-data';
import React from 'react'

export default function Slug({ params }: { params: { slug: string } }) {

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
