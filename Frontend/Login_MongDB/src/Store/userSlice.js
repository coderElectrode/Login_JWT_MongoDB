
import { createSlice } from '@reduxjs/toolkit'

const userSlice=createSlice(
    {
        name:"User",
        initialState:[],
        reducers:{
            setUserState:(state,{payload})=>{
                state.push(payload);

            },
            getUserData:(state)=>{

            }


        }

    }
)

export const { setUserState,getUserData}=userSlice.actions
export default userSlice.reducer;