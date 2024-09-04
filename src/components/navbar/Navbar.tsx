function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-red-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <div className='flex items-center gap-2'>
          <img src="https://imgur.com/FrBRr1A.png" alt="" style={{width: '40px'}} />
            <div className='text-2xl font-bold uppercase'>Farmácia</div>
            </div>
            <div className='flex  items-center gap-5'>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar Categoria</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar