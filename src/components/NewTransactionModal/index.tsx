import Modal from 'react-modal';
import { Container, TransactionType } from './styles';
import imgClose from "../../assets/close.svg";
import imgEntrada from "../../assets/entradas.svg"
import imgSaida from "../../assets/saidas.svg"

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
                <TransactionType>
                    <button type='button'>
                        <img src={imgEntrada} alt="entrada"/>
                        <span>Entrada</span>
                    </button>
                    <button type='button'>
                        <img src={imgSaida} alt="saida"/>
                        <span>Saída</span>
                    </button>
                </TransactionType>
                <input placeholder='Categoria' />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}