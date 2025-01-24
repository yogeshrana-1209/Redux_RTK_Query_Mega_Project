import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import { GiDuration } from "react-icons/gi";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');
    
    // Assuming below data that is get as response while we calling GET API
    // response.data === [{id: 1, name:'Jhon' }]

    // DEV ONLY!!!
    await pause(2000);

    //return the data
    return response.data
});

//While we create the AsyncThunks then below 3 property's are automatically assign
// 1) fetchUsers.pending === 'users/fetch/pending'
// 2) fetchUsers.fulfilled === 'users/fetch/fulfilled'
// 3) fetchUsers.rejected === 'users/fetch/rejected'

//DEV ONLY!!!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
     });
};

export { fetchUsers };