








import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Redirect,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../Context/AuthContext";

import Profile from "../pages/profile/Profile";
import Loginpage from "../pages/Loginpage";
import Pro from './profile/Projects';
import Resource from './profile/Resources';
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import PersonalQuestion from "../pages/profile/Personal";
import Query from "../pages/QueryPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import Registerpage from "../pages/Registerpage";
import co from "../pages/coCurricular";

import pq from './profile/PersonalQuestions'


import lead from '../pages/Lead'

import AskQuestion from "./Query-Section/AskQuestion";
import Question from "../pages/DetailQuestion";

import Project from "../pages/Project";
import art from "./art";
import tournaments from "./tournaments";
import academic from "./../pages/Academic";
import home from "../pages/home/Homepage";
import Sidebar from "./SideBar";
import AddNote from "../pages/Resources/AddNote";
import Note from "../pages/Resources/DetailedNote";
import uploadfile from "../pages/fileshare/Upload";
import Requests from "../pages/Requests/Requests";
import Requested from "../pages/Requests/Requested";
import Download from "../pages/fileshare/Download";

import ProjetctsFeed from "./Projects/ProjectFeed";

import EmailSend from "../pages/fileshare/EmailSend";



export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Homepage} /> */}
          <Route exact path="/" component={home} />
          {/* <Route exact path='/query' component={Query} /> */}
          {/* <Route exact path='/project' component={Project} /> */}

          
      
          <Route exact path="/settings" component={Sidebar} />

          <ProtectedRoute exact path="/login" component={Loginpage} />
          <ProtectedRoute exact path="/register" component={Registerpage} />
            <ProtectedRoute exact path='/lead' component={lead} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/query" component={Query} />
          <ProtectedRoute exact path="/askquestion" component={AskQuestion} />
          <ProtectedRoute exact path="/question" component={Question} />
          <ProtectedRoute exact path="/requests" component={Requests} />
          <ProtectedRoute exact path="/requested" component={Requested} />
          <ProtectedRoute exact path="/download" component={Download} />

          <ProtectedRoute exact path="/projectsFeed" component={ProjetctsFeed} />

          <ProtectedRoute exact path="/email" component={EmailSend} />



          <ProtectedRoute exact path="/project" component={Project} />
          <ProtectedRoute exact path="/co" component={co} />
          <ProtectedRoute exact path="/art" component={art} />
          <ProtectedRoute exact path="/tournaments" component={tournaments} />
          <ProtectedRoute exact path="/academic" component={academic} />
          <ProtectedRoute exact path='/pro' component={Pro} />
          <ProtectedRoute exact path='/resource' component={Resource} />

          <ProtectedRoute exact path='/pq' component={pq} />
         

          <ProtectedRoute exact path="/upload" component={uploadfile} />
          <ProtectedRoute exact path="/addNote" component={AddNote} />
          <ProtectedRoute exact path="/notes" component={Note} />
          <ProtectedRoute exact path="/PersonalQuestion" component={PersonalQuestion} />


          <ProtectedRoute exact path="/settings" component={Sidebar} />

          <ProtectedRoute
            exact
            path="/forgot-password"
            component={ForgotPasswordPage}
          />
          <ProtectedRoute
            exact
            path="/reset-password"
            component={ResetPasswordPage}
          />
        </Switch>
      </Router>
    </>
  );
}

function ProtectedRoute(props) {
  const { currentUSer } = useAuth();
  const { path } = props;
  console.log("path", path);
  const location = useLocation();
  console.log("location state", location.state);

  if (
    path === "/login" ||
    path === "/register" ||
    path === "/forgot-password" ||
    path === "/reset-password"
  ) {
    return currentUSer ? (
      <Redirect to={location.state?.from ?? "/profile"} />
    ) : (
      <Route {...props} />
    );
  }
  return currentUSer ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: path },
      }}
    />
  );
}
