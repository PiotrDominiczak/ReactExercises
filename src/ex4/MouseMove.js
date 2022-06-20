import { useEffect, useState } from "react"

export const MouseMove = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
})
    useEffect(() => {
        const mouseHandler =  e => {
            // console.log(e.offsetX);
        setMousePosition({
            x: e.offsetX,
            y: e.offsetY
        })
    }           
        window.addEventListener('mousemove', mouseHandler);
        return () => {
            window.removeEventListener('mousemove', mouseHandler)
        }
}, [])
    
    return <div>
        Mouse position
        <div>x: {mousePosition.x}</div>
        <div>y: {mousePosition.y}</div>
    </div>
}