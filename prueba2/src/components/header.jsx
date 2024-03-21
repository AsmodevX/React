import React, { useContext, useEffect } from "react";
import tema from "./tema"

const Header = () => {
    const value = useContext (tema)
    useEffect(() => {
        console.log('Hace hambre' + value)
    },[value])
    return (
        <nav className="">
            <ul>
                <li>
                    Inicio
                </li>
                <li>
                    Acerca
                </li>
            </ul>
        </nav>
    );
};
export default Header