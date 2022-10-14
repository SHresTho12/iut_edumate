import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { useAuth } from '../Context/AuthContext'

import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Profilepage from '../pages/Profilepage'
import Query from '../pages/QueryPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import Registerpage from '../pages/Registerpage'

import AskQuestion from './Query-Section/AskQuestion'
import Question from '../pages/DetailQuestion'

import Project from '../pages/Project'


export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/query' component={Query} />
          <Route exact path='/project' component={Project} />
        
          
          




          <ProtectedRoute exact path='/login' component={Loginpage} />
          <ProtectedRoute exact path='/register' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <ProtectedRoute exact path='/query' component={Query} />
           <ProtectedRoute exact path='/askquestion' component={AskQuestion} />
           <ProtectedRoute exact path='/question' component={Question} />

          <ProtectedRoute exact path='/project' component={Project} />

        
          <ProtectedRoute
            exact
            path='/forgot-password'
            component={ForgotPasswordPage}
          />
          <ProtectedRoute
            exact
            path='/reset-password'
            component={ResetPasswordPage}
          />
      


          
          
        </Switch>
      </Router>
    </>
  )
}


function ProtectedRoute(props) {
  const { currentUSer } = useAuth()
  const { path } = props
  console.log('path', path)
  const location = useLocation()
  console.log('location state', location.state)

  if (
    path === '/login' ||
    path === '/register' ||
    path === '/forgot-password' ||
    path === '/reset-password'
    
  ) {
    return currentUSer ? (
      <Redirect to={location.state?.from ?? '/profile'} />
    ) : (
      <Route {...props} />
    )
  }
  return currentUSer ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: path },
      }}
    />
  )
    }