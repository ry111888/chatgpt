
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import ChatIndex from "./components/ChatIndex";
import {useState} from "react";

function App() {
  const [token,setToken] = useState('')
  const [question,setQuestion] =useState('')
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn setToken={setToken}/>}></Route>
            <Route path='/chatIndex' element={<ChatIndex setQuestion={setQuestion}/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn setToken={setToken}/>}></Route>
            <Route path='/chat' element={<Chat token={token} question={question}/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
