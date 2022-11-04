import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalCreateTask from "../components/organismes/createTask";
import NavBar from "../components/molecoles/navBar";
import About from "../components/pages/about";
import Todolist from "../components/pages/todoList";
import Login from "../components/pages/login";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ModalCreateTask />} />
                <Route path="/home" element={<ModalCreateTask />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/about" element={<About/>} />
                <Route path='/modalCreateTask' element={<ModalCreateTask />} />
                <Route path="/todolist" element={<Todolist/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;