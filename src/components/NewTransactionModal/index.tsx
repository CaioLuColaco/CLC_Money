import Modal from 'react-modal'

interface props {
    handleCloseModal: () => void;
    isNewTransaction: boolean;
}

export function NewTransactionModal({isNewTransaction, handleCloseModal}: props) {
    return (
        <Modal isOpen={isNewTransaction} onRequestClose={handleCloseModal}>
            <h1>Hello modal</h1>
        </Modal>
    );
}