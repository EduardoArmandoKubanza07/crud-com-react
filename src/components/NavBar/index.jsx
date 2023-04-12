import { Link } from "react-router-dom";
import { Container } from "./style";

export function NavBar() {
    return(
        <Container>
            <ul>
                <li> <Link to="/" > Início </Link> </li>
                <li> <Link to="/todos" > Tarefas </Link> </li>
            </ul>
        </Container>
    )
}