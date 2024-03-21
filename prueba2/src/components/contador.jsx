import React, {useEffect, useState} from "react"

const Contador = () => {
    const [increment, setIncrement] = useState(0)
    useEffect(() => {
        console.log('Hace hambre' + increment)
    },[increment])
    return (
        <div>
            <p>Hola {increment}</p>
            <button onClick={() => setIncrement(increment + 1)}>Increment</button>
        </div>
    );
};

export default Contador