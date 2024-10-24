import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './Reducer';

const Home = () => {
    const users = useSelector((state)=> state.users);
    const dispatch =  useDispatch();


    const handleDelete =(id)=> {
        dispatch(deleteUser({id:id}))
    }
  return (
   <div className='container border border-black border-3 mt-4'>
    <h2>Information about Users</h2>
    <Link to="/create" className='btn btn-sm btn-success'>Adding User</Link>
    <table className='table table-striped'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user, index)=> (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/update/${user.id}`} className='btn btn-sm btn-info me-3 text-white'>edit</Link>
                            <button onClick={()=> handleDelete(user.id)} className='btn btn-sm btn-danger'>delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
   </div>
  )
}

export default Home;