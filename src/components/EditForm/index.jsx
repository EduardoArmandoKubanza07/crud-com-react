import { Container } from "./style";
import { InputElement }  from "../Input";
import { TextArea }  from "../Textarea";
import { Button } from "../Button";
import { useState  , useEffect } from "react";

export function EditForm({ closeModal  , setTodoList }) {
    
    const [ todoName , setTodoName ] = useState("");
    const [ todoDescription , setTodoDescription ] = useState("");
    const [ btnState , setBtnState ] = useState(true);
    const [ position , setPosition] = useState(null);
    const [ todos , setTodos ] = useState([]); 
    
    useEffect(()=>{
        if( todoName.trim() && todoDescription.trim()) {
            setBtnState(false);

        } else {
            setBtnState(true);
        }
    }, [todoName, todoDescription]);

    useEffect(()=> {
        const pos = JSON.parse(localStorage.getItem("posTodo")) ;
        const datas = JSON.parse(localStorage.getItem("todos")) ?? [];

        setTodoName(datas[pos].todoName);
        setTodoDescription(datas[pos].todoDescription);
        setPosition(pos);
        setTodos(datas);
        
    }, []);

    function editTodo() {
        const validation = validateForm(todoName);
        if(validation === 0 ) {
            alert("Já existe uma tarefa com este nome.");
            return;
        }
        
        const editedTodo = {
            id: todos[position].id,
            todoName : todoName,
            todoDescription: todoDescription
        };

        todos[position] = editedTodo;
        saveTodos(todos);
        alert("Edição feita com sucesso");
        setTodoList();
        setTimeout(()=> {
            closeModal();
        }, 1500);

    }
    
    function validateForm(element) {
        const todos = JSON.parse(localStorage.getItem("todos")) ?? [];
        let cont = 0;
        
        todos.map(( todo , pos ) =>{
            if( pos !== position) {
                if ( todo.todoName.toUpperCase() === element.toUpperCase()) {
                    cont++;
                }
            }
        });

        if( cont === 0) {
            return 1;
        } else {
            return 0;
        }
    }

    function saveTodos(datas) {
        localStorage.setItem("todos", JSON.stringify(datas));
    }

    return(
        <Container>
            <InputElement
                type={"text"}
                placeholder={"Nome da tarefa"}
                handleOnInput={ ({target})=> setTodoName(target.value)}
                value={todoName}
            />
            <TextArea 
                placeholder={"Descrição da tarefa"}
                handleOnInput={({target})=> setTodoDescription(target.value)} 
                value={todoDescription} > 
            </TextArea>

            <Button 
                type={"button"}
                text={"Editar tarefa"}
                disabled={btnState}
                handleOnClick={editTodo}
            />
        </Container>
    )
}
