import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface props {
    handleOpenModal: () => void;
}

export function Header({handleOpenModal}: props) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="CLC Money" />
                <button type="button" onClick={handleOpenModal}> Nova Transação </button>
            </Content>
        </Container>
    )
}