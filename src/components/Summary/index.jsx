import { Container } from "./styles";

import entradasImg from "../../assets/entradas.svg"
import saidasImg from "../../assets/saidas.svg"
import totalImg from "../../assets/total.svg"


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={entradasImg} alt="Entrada" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saida</p>
                    <img src={saidasImg} alt="Saida" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>

            <div className="greenLight">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}