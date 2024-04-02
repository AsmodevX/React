
const Test2 = () => {
    const handleClick = () => {
        console.log('Botón clickeado');
    };

    return (
       <button onClick={() => handleClick('Hola desde el botón')}>Click Me</button>
    );

}

export default Test2