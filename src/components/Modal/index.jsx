import { Container , ModalHeader , Content } from "./style";

export function Modal({ isOpen , children , setModalOpen }) {

    if(isOpen) {
        return(
            <Container>
                <Content>
                    <ModalHeader>
                        <h1> TodoList </h1>
                        <button  title="Fechar" onClick={setModalOpen}> X </button>
                    </ModalHeader>
                    {children}
               </Content>
            </Container>
        )
    }

    return null;
}