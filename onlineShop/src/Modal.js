import { useGlobalContext } from './context';

const Modal = () => {
  const {modalText} = useGlobalContext();

    return <p className="modal-text">{modalText}</p>
  };

export default Modal;