import Modal from 'react-modal'
import { Container } from './styles';

interface props {
    handleCloseModal: () => void;
    isNewTransaction: boolean;
}

export function NewTransactionModal({isNewTransaction, handleCloseModal}: props) {
    return (
        <Modal isOpen={isNewTransaction} onRequestClose={handleCloseModal} overlayClassName="react-modal-overlay" className="react-modal-content">
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