  import './App.css';
  import Todo from './Todo';
  import TodoItems from './TodoItems';
  import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <div className='header'>
          <h2>Todo List</h2>
          <nav>
            <ul>
              <li><Link className='link' to={'/'}>Home</Link></li>
              <li><Link className='link' to={'/todo'}>Todo</Link></li>
            </ul>
          </nav>     
        </div>
          <Routes>
              <Route path='/todo' element={<Todo />} />
              <Route path='/todo/:id' element={<TodoItems />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
  
