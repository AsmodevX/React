import {userState} from "react"

const contador = () => {
    const [increment, setIncrement] = userState(0)
    return <>
        Hola {increment}
        <button onClick={() => setIncrement(increment + 1)}>Increment</button>
    </>
}

export default contador