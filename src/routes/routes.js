import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalCreateTask from "../components/molecoles/modal";
import NavBar from "../components/molecoles/navBar";
import About from "../components/pages/about";
import Home from "../components/pages/home";
import Todolist from "../components/pages/todoList";


const Router = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ModalCreateTask />} />
                <Route path="/home" element={<ModalCreateTask />} />
                <Route path="/about" element={<About/>} />
                <Route path='/modalCreateTask' element={<ModalCreateTask />} />
                <Route path="/todolist" element={<Todolist/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;