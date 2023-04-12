import { Container } from "./style";
import { Modal }  from "../../components/Modal";
import { AddForm } from "../../components/AddForm";
import { useState } from "react";

export function Home() {

    const [ openModal , setOpenModal ] = useState(false);
    
    return(
        <Container>
            <h1> Bem-vindo ao <span> TodoList </span> </h1>
            <p> A melhor aplicação para gestão de tarefas!</p>
            <button onClick={ ()=> setOpenModal(true)} > Criar tarefa  </button>

            <Modal isOpen={openModal} setModalOpen={ ()=> setOpenModal(!openModal) } >
                <AddForm />
            </Modal>
        </Container>
    )
}