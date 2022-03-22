import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, TransactionType, RadioBox } from './styles';
import imgClose from "../../assets/close.svg";
import imgEntrada from "../../assets/entradas.svg"
import imgSaida from "../../assets/saidas.svg"

interface props {
    handleCloseModal: () => void;
    isNewTransaction: boolean;
}

export function NewTransactionModal({isNewTransaction, handleCloseModal}: props) {
    const {createTransaction} = useTransactions();

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });

        setTitle("");
        setAmount(0);
        setCategory('');
        setType('deposit');

        handleCloseModal();
    }

    return (
        <Modal isOpen={isNewTransaction} onRequestClose={handleCloseModal} overlayClassName="react-modal-overlay" className="react-modal-content">
            
            <button type="button" onClick={handleCloseModal} className="react-modal-close">
                <img src={imgClose} alt="close modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar a transação</h2>

                <input placeholder='Titulo' value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder='Valor' value={amount} onChange={event => setAmount(Number(event.target.value))}/>
                <TransactionType>
                    <RadioBox type='button' onClick={() => { setType('deposit')}} isActive={type === 'deposit'} activeColor='green'>
                        <img src={imgEntrada} alt="entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type='button' onClick={() => { setType('withdraw')}} isActive={type === 'withdraw'} activeColor='red'>
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