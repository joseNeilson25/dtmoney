import outcomeImg from "../../assets/outcome.svg";
import totalcomeImg from "../../assets/total.svg";
import incomeImg from "../../assets/income.svg";
import { Container } from "./styles";

export function Sumary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>R$ -500,00</strong>
            </div>
            <div className="dads">
                <header>
                    <p>Total</p>
                    <img src={totalcomeImg} alt="entradas" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}