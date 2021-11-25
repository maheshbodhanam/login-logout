import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
  name:"user",
  initialState:{
      user:null,
  }, 
  reducers:{
      login:(state,action)=>{
       state.user=action.payload;   
      },
      lagout:(state)=>{
          state.user=null;
      },
    },
});
export const{login,lagout}=userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;