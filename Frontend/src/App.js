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
import Community from "./Pages/Community";
import Members from "./Pages/Members";
import News from "./Pages/News";
import Streams from "./Pages/Streams";
import MyGroups from "./Pages/MyGroups";
import Chat from "./Pages/Chat";
import Friends from "./Pages/Friends";
import Profile from "./Pages/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { ValidateToken } from "./redux/features/authSlice"
import Chats from "./Components/Chats";
function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("Token")
  useEffect(() => {
    // dispatch(ValidateToken(token))
  }, [])
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            // element={user ? <Home /> : <Navigate replace to="/Login" />}
            element={<Home />}
          />
          <Route
            path="/Login"
            // element={user ? <Navigate replace to="/" /> : <Login />}
            element={<Login />}
          />
          <Route
            path="/Signup"
            // element={user ? <Navigate replace to="/" /> : <SignUpPage />}
            element={<SignUpPage />}
          />
          <Route path="/community" element={<Community />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/News" element={<News />} />
          <Route path="/Streams" element={<Streams />} />
          <Route path="/MyGroup" element={<MyGroups />} />
          <Route path="/GroupChat" element={<MyGroups />}/>
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
