import Image from 'next/image'

export default function Home() {
  return (
   <>
    <main className="h-screen w-screen flex justify-center items-center bg-[#131313]" id="splash">
      <Image className="spin-anim" src="/media/images/collective-finance-logo-spin.png" alt="Collective Finance" height={160} width={160}></Image>
    </main>
   </>
  )
}
