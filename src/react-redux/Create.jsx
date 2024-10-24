import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './Reducer';

const Create = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    const users = useSelector((state)=> state.users);

    const handleSubmit=(event)=> {
        event.preventDefault();
        dispatch(addUser({id:users[users.length -1].id +1,name, address, email}))
        navigate("/");
    }

  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center bg-light'>
      <div className='w-50 border shadow p-3 bg-secondary text-white'>
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name'
            onChange={e => setName(e.target.value)}
            />

            <label htmlFor="name">Address:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' 
            onChange={e => setAddress(e.target.value)}
            
            />

            <label htmlFor="name">Email:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' 
            onChange={e => setEmail(e.target.value)}
            />
           
            <button className='btn btn-sm btn-info  mt-4 m-2'>Submit</button>
            <Link to="/" className='btn btn-sm btn-primary mt-4 m-2'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create;