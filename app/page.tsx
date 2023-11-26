import Link from 'next/link'

export default function Home() {
  return (
     <div className='w-[100%] h-[100vh] flex justify-center items-center'>
      <Link href={'/blogs'} className='bg-purple-500 text-white font-bold font-mono py-3 px-9 rounded-xl'>
          SEE ALL BLOGS
      </Link>
     </div>
  )
}
