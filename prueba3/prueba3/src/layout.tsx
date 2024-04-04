import Test1 from "./components/incremento";
import Test2 from "./components/carrusel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const Layout = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Test1 />} />
                <Route path ="/about" element ={<Test2 />} />
            </Routes>
        </Router>
    )
}

export default Layout