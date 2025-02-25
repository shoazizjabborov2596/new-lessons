import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const UserSlice = createSlice({
    name:"users",
    initialState:userList,
    reducers:{
     addUser:(state, action)=> {
        state.push(action.payload)
     },
     updateUser:(state, action)=>{
      const {id,name, address, email} = action.payload;
      const uu = state.find(f => f.id == id);
      if(uu){
        uu.name = name,
        uu.address = address,
        uu.email = email
      }
     },
    deleteUser:(state, action)=> {
        const {id} = action.payload;
        const uu = state.find(user => user.id == id);

        if(uu){
          return state.filter(f => f.id !== id);  
        }
    }
    }
})
export const {addUser,updateUser,deleteUser} = UserSlice.actions;
export default UserSlice.reducer;