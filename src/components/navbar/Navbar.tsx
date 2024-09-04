import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-red-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <div className='flex items-center gap-2'>
          <img src="https://imgur.com/FrBRr1A.png" alt="" style={{width: '40px'}} />
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link></div>
            <div className="relative flex flex-1 justify-center items-center w-30 text-black">
                    <form className="flex justify-center w-3/4">
                        <input className="px-4 py-4 rounded-lg w-10/12 h-9 focus:outline-none"
                            type="search"
                            placeholder="Pesquisar Produto"
                            id="busca"
                            name="busca"
                            required
                        />
                        <button type="submit" className="bg-teal-500 hover:bg-teal-900 dark:hover:bg-teal-700 dark:bg-teal-600 p-2.5 border border-teal-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-teal-800 w-9 h-9 font-medium text-sm text-white ms-2 focus:outline-none">
                            <MagnifyingGlass size={14} weight="bold" />
                        </button>
                    </form>
                </div>
            
            <div className='flex  items-center gap-5'>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
            <User size={32} weight='bold' />
            <ShoppingCart size={32} weight='bold' />
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar