//  TODO: In mobile portrait mode the chat's top messages got disappeared.
// https://github.com/FredrikOseberg/react-chatbot-kit/issues/18#issuecomment-1867274845
// above might be helpful in solving this issue.
// create new branch to have a fix for this issue
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Home from './components/Home/Home.jsx'
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import { getToken } from "./authToken.js";

function App() {
  console.log('here')
  console.log(getToken())
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sign-in"
            element=
            {!getToken() ? <SignIn /> : <Navigate to="/" replace={true} />}
          />
          <Route
            path="/sign-up"
            element=
            {!getToken() ? <SignUp /> : <Navigate to="/" replace={true} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
