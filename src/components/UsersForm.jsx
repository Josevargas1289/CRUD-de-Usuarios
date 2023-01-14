import axios from 'axios';
import React, { useState, useEffect, selectUser } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ getUsers, on, mostrarFormUser, userSelected, selectUser }) => {
    const { handleSubmit, register, reset } = useForm()

    

    const emtyUser ={email: "",password: "", first_name: "", last_name: "", birthday: "" }
  useEffect(()=> {
   
    if (userSelected) {
        mostrarFormUser();
        reset(userSelected)
    }else{
        reset(emtyUser)
 
    }

  },[userSelected])


    const submit = (data) => {
        console.log(data);
        if (userSelected) {
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`,data)
            .then(()=> {
                getUsers();
                selectUser(null)
                reset(emtyUser); 
                
            })

        }else{
        axios.post("https://users-crud.academlo.tech/users/", data)
            .then((res) => {
                 getUsers();
                 reset(emtyUser);
       

                
                });    
        }
        

    };
    // funcion para motsrar el form

    return (

        <div onSubmit={handleSubmit(submit)}>

            
            <form className={on ? 'on' : 'off'} >
                <h1 className='title-user'> Users Form</h1>
            <div onClick={()=>mostrarFormUser(reset(emtyUser))} className='button-close-form'><i className='bx bxs-user-x' ></i></div>

                <hr />
                <div className='input-container'>
                    <label htmlFor="email"> <i className='bx bxs-envelope'></i> Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                    />
                </div>

                <div className='input-container'>
                    <label htmlFor="password"> <i className='bx bxs-key'></i> Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                    />
                </div>


                <div className='input-container'>
                    <label htmlFor="first_name"> <i className='bx bxs-user'></i>  First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        {...register("first_name")}
                    />
                </div>

                <div className='input-container'>
                    <label htmlFor="last_name"> <i className='bx bxs-user' ></i> Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        {...register("last_name")}
                    />
                </div>

                <div className='input-container'>
                    <label htmlFor="birthday"> <i className='bx bxs-party' ></i> Birthday</label>
                    <input
                        type="date"
                        id="birthday"
                        {...register("birthday")}
                    />
                </div>
                <button className='button-submit'><i className='bx bxs-send' ></i> Submit</button>

            </form>


            </div>

    );
};

export default UsersForm;