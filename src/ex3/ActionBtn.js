export const ActionBtn = (props) => {
    const { firstNumber, secondNumber, name, typeOfAction, setResult } = props
    const action = () => {
        if (typeOfAction === "addition") return (firstNumber + secondNumber)
        else if (typeOfAction === "subtraction") return firstNumber - secondNumber
        else if (typeOfAction === "multiplication") return firstNumber * secondNumber
        else if (typeOfAction === "division") return (secondNumber !== 0) ? firstNumber / secondNumber : alert("Nie można dzielić przez 0!")
        else return null
    }   
    const clickHandler=(e) => setResult(action)
        return(
            < button onClick={clickHandler}>{name}</button >
        )
} 