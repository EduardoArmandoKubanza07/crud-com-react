import { Container } from "./style";

export function InputElement({ type , placeholder , handleOnInput , value }) {
    return(
        <Container 
            type={type}
            placeholder={placeholder}
            onInput={handleOnInput}
            value={value}
        />
    )
}