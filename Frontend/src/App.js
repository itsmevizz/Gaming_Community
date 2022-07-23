import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/UserHome";
import Login from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignupPage";
import Community from './Pages/Community'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            // element={user ? <Home /> : <Navigate replace to="/Login" />}
            element={<Home/>}
          />
          <Route
            path="/Login"
            // element={user ? <Navigate replace to="/" /> : <Login />}
            element = {<Login/>}
          />
          <Route
            path="/Signup"
            // element={user ? <Navigate replace to="/" /> : <SignUpPage />}
            element={<SignUpPage/>}
          />
          <Route 
          path="/community" 
          element={<Community/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
