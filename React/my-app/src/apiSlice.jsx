import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:
            'http://localhost:1122/',
            
        credentials:'include',
        prepareHeaders:(headers,{getState})=>{
            console.log(getState().auth);
            const accessToken=getState().auth.token
            // const userInfo=getState().auth.user
            console.log(accessToken);
            if(accessToken){
                headers.set("authorization",`Bearer ${accessToken}`)
            }
            // if(userInfo){
            //     headers.set("userInfo",userInfo)
            // }
            return headers
        }
    }),
    endpoints: () => ({}),
})
export default apiSlice