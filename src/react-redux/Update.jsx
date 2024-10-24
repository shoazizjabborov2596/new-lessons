import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './Reducer';

const Update = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const  users = useSelector((state)=> state.users);
    const navigate = useNavigate();
    const existingUser = users.filter(f => f.id == id);
    const {name, address, email} = existingUser[0];
    const [uname, setName] = useState(name);
    const [uaddress, setAddress] = useState(address);
    const [uemail, setEmail] = useState(email);

    const handleUpdate =(event)=> {
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            address:uaddress,
            email:uemail,
        }))
        navigate('/');
    }
  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center bg-light'>
    <div className='w-50 border shadow p-3 bg-secondary text-white'>
      <h2>Updating User</h2>
      <form onSubmit={handleUpdate} >
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' className='form-control' placeholder='Enter Name'
      value={uname}     onChange={e => setName(e.target.value)}
          />

          <label htmlFor="name">Address:</label>
          <input type="text" name='name' className='form-control' placeholder='Enter Name' 
        value={uaddress}    onChange={e => setAddress(e.target.value)}
          
          />

          <label htmlFor="name">Email:</label>
          <input type="text" name='name' className='form-control' placeholder='Enter Name' 
        value={uemail}   onChange={e => setEmail(e.target.value)}
          />
         
          <button className='btn btn-sm btn-info  mt-4 m-2'>Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Update;