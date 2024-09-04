
function Home() {
    return (
        <>
        <div className="bg-white flex justify-center">
          <div className='container grid grid-cols-2 text-black'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja Bem Vindo!</h2>
              <p className='text-xl'>Confira Nossos Medicamentos</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-black py-2 px-4'>Ver Categorias</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src="https://imgur.com/AWAvt2S.png" alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;