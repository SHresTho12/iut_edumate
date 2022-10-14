import React from 'react'
import AppRouter from './components/AppRouter'
import AuthContextProvider from './Context/AuthContext'
import {useSelector , useDispatch} from "react-redux"

import { login, logout, selectUser } from "./feature/userSlice";
import { useEffect } from "react";
import {auth} from "./init-firebase"
function App() {
  
// const redUser = useSelector(selectUser)
// const dispatch = useDispatch()
// useEffect(() => {
//   auth.onAuthStateChanged((authUser) => {
//     if (authUser) {
//       dispatch(
//         login({
//           uid: authUser.uid,
//           photo: authUser.photoURL,
//           displayName: authUser.displayName,
//           email: authUser.email,
//         })
//       );
//     } else {
//       dispatch(logout());
//     }
//     // console.log(authUser);
//   });
// }, [dispatch]);
  return (
    <AuthContextProvider><AppRouter /></AuthContextProvider>
  )
  
}

export default App
