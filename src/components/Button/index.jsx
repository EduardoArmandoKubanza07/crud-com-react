import { Container } from "./style";

export function Button({text , type , disabled , handleOnClick}){
    return(
        <Container type={type} disabled={disabled} onClick={handleOnClick} >
            {text}
        </Container>
    )
}