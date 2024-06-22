import {useState, useEffect, useMemo} from "react";

const Teste = () => {
    const [name, setName] = useState('Jona')
    
    const handleChangeName = () => {
        setName(prev => prev === 'Jona' ?'José' : 'Jona')
    }

    const calculo =  useMemo(() => {
        console.log("calculou")
        return 10 + 2000
    }, [])
    console.log('renderizou ', calculo)


    const changeUser = () => {
        handleChangeName()
    }

    useEffect(() => {
        changeUser()
    }, [])

    return (
        <div>
            <p>{name}</p>
            <button onClick={handleChangeName}>altera</button>
        </div>
    )
}

export {Teste}