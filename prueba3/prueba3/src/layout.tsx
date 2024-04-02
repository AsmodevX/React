import Test1 from "./components/test1";
import Test2 from "./components/test2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/test3";

const Layout = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Test1 />} />
                <Route path ="/about" element ={<Test2 />} />
            </Routes>
        </Router>
    )
}

export default Layout