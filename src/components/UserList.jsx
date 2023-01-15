import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserList = ({ userList, on, selectUser,getUsers }) => {
    const OrderUser = userList.sort((a,b)=>a.first_name.localeCompare(b.first_name))
    // const [isLoading, setIsLoading]=useState(true)
    const deleteuser=(user)=>{
        // alert(user.first_name)
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
        .then(()=>getUsers())
    }
  
  

    return (
        <div>
       
    
        <div className='container-user-list'>
        <h1 className='totalList'>{`Usuarios Registrados:${OrderUser.length}`}</h1>
            
            <ul >
                <div className= {on ? 'slider' : 'slider-of'}>
                <div className= 'container-card'  >
                {
                    OrderUser.map(user => (
                        <li className='card-users' key={user.id}>
                            <h1 className='title-user-data'>User Data</h1>
                            <br />
                            <ul>
                                <li><b>First Name: </b>{user.first_name}</li>
                                <li><b>Last Name: </b>{user.last_name}</li>
                                <li><b>Email: </b>{user.email}</li>
                                <li><b>Password: </b>{user.password}</li>
                                <li><b>Birthday: </b>{user.birthday}</li>
                            </ul>
                            <div className='container-btn'>
                                <button onClick={()=>selectUser(user)} className='button'><i className='bx bx-edit' ></i></button>
                                <button onClick={()=>deleteuser(user)} className='button'><i className='bx bxs-trash-alt' ></i></button>
                            </div>

                        </li>
                    ))
                }
                </div>
                </div>
            </ul>

        </div>
        </div>
    );
};

export default UserList;