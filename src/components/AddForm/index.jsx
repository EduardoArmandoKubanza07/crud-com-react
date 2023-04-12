import { Container } from "./style";
import { InputElement }  from "../Input";
import { TextArea }  from "../Textarea";
import { Button } from "../Button";
import { useState  , useEffect} from "react";
import { useNavigate } from "react-router-dom";

export function AddForm() {

    const [ todoName , setTodoName ] = useState("");
    const [ todoDescription , setTodoDescription ] = useState("");
    const [ btnState , setBtnState ] = useState(true);
    const navigate = useNavigate();
    
    useEffect(()=>{
        if( todoName.trim() && todoDescription.trim()) {
            setBtnState(false);

        } else {
            setBtnState(true);
        }
    }, [todoName, todoDescription]);


    function createTodo() {
        const validation = validateForm(todoName);
        if(validation === 0 ) {
            alert("Já existe uma tarefa com este nome.");
            return;
        }

        const todos = JSON.parse(localStorage.getItem("todos")) ?? [];
        
        const newTodo = {
            id: randomId(),
            todoName : todoName,
            todoDescription: todoDescription
        };

        todos.unshift(newTodo);
        saveTodos(todos);
        resetFormDatas();
        alert("Tarefa criada com sucesso.");
        
        setTimeout(()=>{
            navigate("/todos");
        }, 1500);
    }

    function validateForm(element) {
        const todos = JSON.parse(localStorage.getItem("todos")) ?? [];
        let cont = 0;
        
        todos.forEach( todo =>{
            if ( todo.todoName.toUpperCase() === element.toUpperCase()) {
                cont++;
            }
        });

        if( cont === 0) {
            return 1;
        } else {
            return 0;
        }
    }

    function randomId() {
        const id = Math.random().toString(16).substring(2);
        const todos = JSON.parse(localStorage.getItem("todos")) ?? [];
        let cont = 0;

        todos.forEach(todo => {
            if ( id === todo.id) {
                cont++;
            }
        });
        if( cont == 0) {
            return id;
        } else {
            randomId();
        }
    }
    
    function saveTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function resetFormDatas(){
        setTodoName("");
        setTodoDescription("");
    }

    return(
        <Container>
            <InputElement
                type={"text"}
                placeholder={"Nome da tarefa"}
                handleOnInput={ ( {target})=> setTodoName(target.value)}
                value={todoName}
            />
            <TextArea 
                placeholder={"Descrição da tarefa"}
                handleOnInput={({target})=> setTodoDescription(target.value)} 
                value={todoDescription} > 
            </TextArea>

            <Button 
                type={"button"}
                text={"Criar tarefa"}
                disabled={btnState}
                handleOnClick={createTodo}
            />
        </Container>
    )
}