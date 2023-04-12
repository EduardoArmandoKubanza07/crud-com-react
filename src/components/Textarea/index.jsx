import { Container }  from "./style";

export function TextArea({placeholder , handleOnInput , value}) {
    return(
        <Container 
            placeholder={placeholder}
            onInput={handleOnInput}
            value={value}>
        </Container>
    )
}