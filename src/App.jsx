import React from 'react'
import { Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom'
import Posts from './Pages/Posts'
import Todos from './Pages/Todos'

const App = () => {
    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-6 offset-3">
                    <Link to='/todos' className='btn btn-warning mx-2'>Todos</Link>
                    <Link to='/posts' className='btn btn-danger'>Posts</Link>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <Switch>
                        <Route path='/todos' component={Todos}/>
                        <Route path='/posts' component={Posts}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App