import Modal from 'react-modal';
import { Container, TransactionType, RadioBox } from './styles';
import imgClose from "../../assets/close.svg";
import imgEntrada from "../../assets/entradas.svg"
import imgSaida from "../../assets/saidas.svg"
import { useState, FormEvent } from 'react';
import { api } from '../../services/api';

interface props {
    handleCloseModal: () => void;
    isNewTransaction: boolean;
}

export function NewTransactionModal({isNewTransaction, handleCloseModal}: props) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data =  {title, value, type, category};

        api.post("transactions", data)
    }

    return (
        <Modal isOpen={isNewTransaction} onRequestClose={handleCloseModal} overlayClassName="react-modal-overlay" className="react-modal-content">
            
            <button type="button" onClick={handleCloseModal} className="react-modal-close">
                <img src={imgClose} alt="close modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar a transação</h2>

                <input placeholder='Titulo' value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder='Valor' value={value} onChange={event => setValue(Number(event.target.value))}/>
                <TransactionType>
                    <RadioBox type='button' onClick={() => { setType('deposit')}} isActive={type == 'deposit'} activeColor='green'>
                        <img src={imgEntrada} alt="entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type='button' onClick={() => { setType('withdraw')}} isActive={type == 'withdraw'} activeColor='red'>
                        <img src={imgSaida} alt="saida"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionType>
                <input placeholder='Categoria'  value={category} onChange={event => setCategory(event.target.value)}/>

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}