import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';

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

      <Modal isOpen={isNewTransaction} onRequestClose={handleCloseModal}>
          <h1>Hello modal</h1>
      </Modal>

      <GlobalStyle />
    </>
  );
}
