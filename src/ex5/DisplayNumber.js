import {
    useEffect,
    useState
} from "react"

export const DisplayNumber = () => {

    const [number, setNumber] = useState('')
    
    useEffect(() => {
       (number !== '')&&console.log(2 * number)
    },
        [number])

    return(
        < >
            <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }} />          
        <div >{(number==="")?'':`Zwrócona liczba w konsoli to: ${number}x2= ${number*2}`}  </div>
        </>)
}