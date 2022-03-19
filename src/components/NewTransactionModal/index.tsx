import Modal from 'react-modal'
import { Container } from './styles';
import imgClose from "../../assets/close.svg"
interface props {
    handleCloseModal: () => void;
    isNewTransaction: boolean;
}

export function NewTransactionModal({isNewTransaction, handleCloseModal}: props) {
    return (
        <Modal isOpen={isNewTransaction} onRequestClose={handleCloseModal} overlayClassName="react-modal-overlay" className="react-modal-content">
            
            <button type="button" onClick={handleCloseModal} className="react-modal-close">
                <img src={imgClose} alt="close modal" />
            </button>

            <Container>
                <h2>Cadastrar a transação</h2>

                <input placeholder='Titulo' />
                <input type="number" placeholder='Valor' />
                <input placeholder='Categoria' />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}