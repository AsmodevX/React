import { useState } from "react"

const Test1 = () => {
    const [Increment, setIncrement] = useState(0)
    const elementh1 = <h1>Holas {Increment}</h1>

    return <>
        Hola {Increment}
        {
            elementh1
        }
        <button onClick={() => setIncrement(Increment + 1)}>Increment</button>
    </>
}
export default Test1