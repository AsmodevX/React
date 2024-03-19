import {userState} from "react"

const Test2 = () => {
    const [increment, setIncrement] = userState(0)
    return <>
        Hola {increment}
        <button onClick={() => setIncrement(increment + 1)}>Increment</button>
    </>
}

export default Test2