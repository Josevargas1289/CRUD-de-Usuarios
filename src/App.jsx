import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersForm from './components/UsersForm'
import axios from 'axios'
import UserList from './components/UserList'


function App() {

  const [userList, setUserList] = useState([])
  const [on, setOn] = useState(false);
  const [userSelected, setUserSelected]= useState(null)
 
  useEffect(() => {

    axios.get('https://users-crud.academlo.tech/users/')
      .then((res) => setUserList(res.data))
      setTimeout(()=>setIsLoading(false), 1000)
    

  }, [])
  // console.log(userSelected);

  const getUsers = () => {
    axios.get('https://users-crud.academlo.tech/users/')
      .then((res) => setUserList(res.data))
     

  }

  const mostrarFormUser = () => {
    setOn(!on);
   
  }

  const selectUser =(user)=>{
  setUserSelected(user);


  }
  
  return (
    <div className="App">
    
      <div className='container-general'>
      
        <div className='header'>
          <h1> <i className='bx bxs-user-circle' ></i> CRUD´S</h1>
          <button onClick={mostrarFormUser} className='btn-header'><i className='bx bxs-user-plus'></i>Create User</button>
        </div>
        <div className='container-app'> 
          <UsersForm getUsers={getUsers} on={on} mostrarFormUser={mostrarFormUser} userSelected={userSelected} selectUser={selectUser} />
          <UserList userList={userList} on={on} selectUser={selectUser} getUsers={getUsers} />
        </div>
      </div>
     

    </div>
  )
}

export default App
