import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransaction, setIsNewTransactions] = useState(false)


    function handleOpenModal(){
        setIsNewTransactions(true);
    };

    function handleCloseModal() {
        setIsNewTransactions(false);
    };
  return (
    <>
      <Header handleOpenModal={handleOpenModal}/>
      <Dashboard />
      <NewTransactionModal handleCloseModal={handleCloseModal} isNewTransaction={isNewTransaction}/>
      <GlobalStyle />
    </>
  );
}
