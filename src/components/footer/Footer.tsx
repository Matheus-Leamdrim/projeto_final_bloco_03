
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  let data = new Date().getFullYear()

  return (
    <>
        <div className="flex justify-center bg-blue-700 text-white">
          <div className="container flex flex-col items-center py-2">
          <p className='text-xl font-bold'> Farmácia | {data}</p>
            <p className='text-xl'>Acesse Nossas Redes Sociais</p>
            <div className='flex gap-4'>
              <LinkedinLogo size={48} weight='thin' />
              <InstagramLogo size={48} weight='thin' />
              <FacebookLogo size={48} weight='thin' />
            </div>
            </div>
        </div>
      </>
  )
}

export default Footer