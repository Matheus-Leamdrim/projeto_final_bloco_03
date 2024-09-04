import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <div className="bg-white flex justify-center">
          <div className='container grid grid-cols-2 text-black'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja Bem Vindo!</h2>
              <p className='text-xl'>Confira Nossos Medicamentos</p>
  
              <div className="flex justify-around gap-4">
              
                <Link to='/cadcategoria' className='border-2 text-whiteborder-white bg-slate-400 px-4 py-2 border-solid rounded'>Novo Medicamento</Link>
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