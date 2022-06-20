import React from "react";
import { ResultDisplay } from './ResultDisplay'
import {ActionBtn} from './ActionBtn'
import {InputForm} from './InputForm'

export const Calculator = () => {
    const [firstNumber, setNumberOne] = React.useState(0)
    const [secondNumber, setNumberTwo] = React.useState(0)
    const [result, setResult] = React.useState("")
    return <>
        <InputForm
            number={firstNumber}
            setNumber={setNumberOne}
            txt="pierwszą"
            result={result}
        />
        <InputForm
            number={secondNumber}
            setNumber={setNumberTwo}
            txt="drugą"
        />

        <ActionBtn
            typeOfAction="addition"
            firstNumber={firstNumber}
            secondNumber={secondNumber}
            setResult={setResult}
            name="Dodaj"/> 
        
        <ActionBtn
            typeOfAction="subtraction"
            firstNumber={firstNumber}
            secondNumber={secondNumber}
            setResult={setResult}
            name="Odejmij" /> 
        <br/>
        <ActionBtn
            typeOfAction="multiplication"
            firstNumber={firstNumber}
            secondNumber={secondNumber}
            setResult={setResult}
            name="Pomnóż" /> 
        
        <ActionBtn
            typeOfAction="division"
            firstNumber={firstNumber}
            secondNumber={secondNumber}
            setResult={setResult}
            name="Podziel"/> 

        <ResultDisplay result={result}/>
    </>
}





{/* <label >Podaj pierwszą liczbę:</label><br/>
        <input type="number" value={firstNumber} onChange={(event) => setNumberOne(parseInt(event.target.value))} /><br/>
        <label >Podaj drugą liczbę:</label><br/>
        <input type="number" value={secondNumber} onChange={(event) => setNumberTwo(parseInt(event.target.value))} /><br /> 
        <button onClick={e=>setResult(firstNumber+secondNumber)} >Dodaj</button>
        <button onClick={e=>setResult(firstNumber-secondNumber)} >Odejmij</button><br/>
        <button onClick={e=>setResult(firstNumber*secondNumber)} >Pomnóż</button>
        <button onClick={e=>setResult((secondNumber !== 0) ? firstNumber/secondNumber  :  alert("Nie można dzielić przez 0!") )} >Podziel</button>  */}