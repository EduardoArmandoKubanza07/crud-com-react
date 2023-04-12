import { Container }  from "./style";

export function Todo({ name , description  , clickEditBtn , clickDeleteBtn}) {
    return(
        <Container>
            <p title={description} > {name} </p>
            <div>
                <button onClick={clickEditBtn} title="Editar a tarefa." > Editar </button>
                <button onClick={clickDeleteBtn} title="Deletar a tarefa." > Deletar </button>
            </div>
        </Container>
    )
}