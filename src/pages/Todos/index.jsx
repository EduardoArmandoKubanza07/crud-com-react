import { useEffect , useState } from "react";
import { Container, Search } from "./style";
import { Todo } from "../../components/Todo";
import { Modal }  from "../../components/Modal";
import { EditForm } from "../../components/EditForm";

export function Todos() {

    const [ todos , setTodos ] = useState([]);
    const [ searchValue , setSearchValue ] = useState("");
    const [ openModal , setOpenModal ] = useState(false);

    useEffect(()=> {
        const datas = JSON.parse(localStorage.getItem("todos")) ?? [];
        setTodos(datas);
    }, []);

    useEffect(()=>{
        searchTodos();
    }, [searchValue])

    function setTodosList(){
        const datas = JSON.parse(localStorage.getItem("todos")) ?? [];
        setTodos(datas);
    }
    
    function searchTodos() {
        const datas = JSON.parse(localStorage.getItem("todos")) ?? [];
        if(searchValue) {
            const searched = searchValue.trim();
           
            const searchResult = datas.filter( data => {
                return (data.todoName.toUpperCase().includes(searched.toUpperCase()));
            });
            setTodos(searchResult);
        } else {
            setTodos(datas);   
        }
    }

    function deleteTodo(pos) {
        const conf = confirm("Tens a certeza que pretendes deletar ?");

        if(conf) {
            const datas = JSON.parse(localStorage.getItem("todos")) ?? [];
            datas.splice(pos , 1);
            saveTodos(datas);
            setTodos(datas);
        }
    }

    function saveTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function editTodo(pos){
        localStorage.setItem("posTodo", JSON.stringify(pos));
    }

    return(
        <Container>
            <section>
                <Search
                    type="search"
                    placeholder="Pesquisar"
                    value={searchValue}
                    onInput={({target}) => setSearchValue(target.value)}
                />
                <ul>
                    {
                    todos.length !== 0 ?
                    todos.map(( todo , pos ) =>(
                        <Todo
                            key={todo.id}
                            name={todo.todoName}
                            description={todo.todoDescription}
                            clickEditBtn={()=>[editTodo(pos), setOpenModal(!openModal)]}
                            clickDeleteBtn={ ()=> deleteTodo(pos)}
                        />    
                    )) :   
                    <legend> Nenhuma tarefa encontrada. </legend>
                    }
                </ul>
            </section>
            <Modal isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}>
                <EditForm closeModal={()=> setOpenModal(false)} setTodoList={setTodosList} />
            </Modal>
        </Container>
    )
}