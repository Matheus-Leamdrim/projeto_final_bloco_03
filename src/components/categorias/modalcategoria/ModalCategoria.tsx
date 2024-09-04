import Popup from 'reactjs-popup';
import './ModalPostagem.css'
import FormCategoria from '../formcategoria/FormCategoria';

function ModalCategoria() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-2 hover:bg-white hover:text-indigo-800'>Nova Postagem</button>} modal>
        <div>
          <FormCategoria />
        </div>
      </Popup>
    </>
  );
}

export default ModalCategoria;