import { connect } from "react-redux"
import { addTodo } from "../redux/TodoReducer"
import { useState } from "react"
import { toggleTodo } from "../redux/TodoReducer"
import { getTodosFromBack } from "../redux/TodoReducer"
import { useEffect } from "react"

const Todos = ({ todos, addTodo, toggleTodo , getTodosFromBack}) => {

    const [InputVal, setInputVal] = useState('')


    var Add = () => {
        addTodo(InputVal)
        setInputVal('')
    }

    useEffect(()=>{
        getTodosFromBack()
    },[])


    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header d-flex">
                        <input type="text" className="form-control mx-2" onChange={(e) => setInputVal(e.target.value)} />
                        <button className="btn btn-success" onClick={Add}>add</button>
                    </div>
                    <div className="card-body">
                        {
                            todos.map(item =>
                                <div key={item.id} className="d-flex">
                                    <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)} />
                                    <h4 className="mx-2">{item.title}</h4>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
function MSTP(state) {
    return {
        todos: state.todos,
        payload: state.InputVal
    }
}


export default connect(MSTP, { addTodo, toggleTodo, getTodosFromBack})(Todos)