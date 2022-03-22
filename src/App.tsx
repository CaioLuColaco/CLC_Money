import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>

      <Header handleOpenModal={handleOpenModal}/>
      <Dashboard />
      <NewTransactionModal handleCloseModal={handleCloseModal} isNewTransaction={isNewTransaction}/>
      <GlobalStyle />
      
    </TransactionsProvider>
  );
}
