import Link from 'next/link'
import React from 'react'
import { blogData } from '../constants/blog-data'

  
export default function Blogs() {
  return (
    <section className=''>
     <h1 className='text-5xl font-bold mt-8 text-center'> All Blogs</h1>
      <div>
        <div>
            {blogData.map((item, i:number )=>{
                return(
                    <Link key={i} href={`/blogs/${item.slug}`} className='border-gray-900 flex justify-center'>
                        <ul className='text-2xl border  my-4 cursor-pointer'>
                            <li>
                            {i + 1} : {item.title}
                            </li>
                        </ul>
                    </Link>
                )
            })}
        </div>
      </div>
    </section>
  )
}
