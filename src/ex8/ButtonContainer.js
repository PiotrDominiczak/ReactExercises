import classNames from 'classnames'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
export const ButtonContainer = () => {
    const navigate = useNavigate()
const [BorderRedActive,setBorderRedActive] = useState(false)
const [BorderGreenActive,setBorderGreenActive] = useState(false)
const [BackgroundYellowActive,setBackgroundYellowActive] = useState(false)
    const [BackgroundBrownActive, setBackgroundBrownActive] = useState(false)
    
    return (
        <div>
        <div className={classNames(styles.Container, {
            [styles.BorderRed]: BorderRedActive,
            [styles.BorderGreen]: BorderGreenActive,
            [styles.BackgroundYellow]: BackgroundYellowActive,
            [styles.BackgroundBrown]: BackgroundBrownActive,
        })}></div>
            <button onClick={() => {
                navigate("/mouse-move", { replace: true })
            }}>Navigate to mouse move</button>
        <button onClick={()=>setBorderRedActive(!BorderRedActive)}>border red</button>
        <button onClick={()=>setBorderGreenActive(!BorderGreenActive)}>border green</button>
        <button onClick={()=>setBackgroundYellowActive(!BackgroundYellowActive)}>background yellow</button>
        <button onClick={()=>setBackgroundBrownActive(!BackgroundBrownActive)}>background brown</button>
        </div>
        
    )
}