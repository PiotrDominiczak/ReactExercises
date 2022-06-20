export const InputForm = (props) => {
    const { number, setNumber, txt, result } = props
    const action = (e) => { setNumber(parseInt(e.target.value)) }
        
        return (
        <>
        < label > Podaj {txt} liczbę:</label ><br/>
                <input type="number" value={number} onChange={(action)} /><br/>
        </>
        )
}