import { redirect } from 'next/navigation'

export default async function Home() {
  redirect('https://ccbuild-project.vercel.app/projects')
  return (
    <>
      <div className='flex w-screen flex-row'>hello</div>
    </>
  )
}
