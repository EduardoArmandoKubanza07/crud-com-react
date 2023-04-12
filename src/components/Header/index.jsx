import { Container } from "./style";
import { NavBar } from "../NavBar";

export function Header() {
    return(
        <Container>
            <h1> TodoList  </h1>
            <NavBar />
        </Container>
    )
}