import { Sumary } from "../Sumary";
import { Container } from "../Dashboard/style";
import { TransactionTable } from "../TransactionsTable";

export function Dashboard(){
    return(
        <Container>
            <Sumary/>
            <TransactionTable/>
        </Container>
    );
}