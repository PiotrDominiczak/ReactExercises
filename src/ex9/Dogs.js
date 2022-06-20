import axios from "axios"
import { useEffect, useState } from "react"
const DOG_API = "https://dog.ceo/api/breeds/image/random"

export const Dogs = () => {

// const [dogImage, setDogImage] = useState('')
const [dogImages, setDogImages] = useState([])
const [isLoadingDog, setIsLoadingDog] = useState(true)

    const fetchDog = async () => {
        setIsLoadingDog(true)
        try {
            const res = await axios.get(DOG_API)
            setDogImages([...dogImages, res.data.message])
        } catch (error) {
            alert("Api error")
        } finally {
            setIsLoadingDog(false)
        }
    }
    
//     const fetchDog = async () => {
//         setIsLoadingDog(true)
//         try {
//             const res = await axios.get(DOG_API)
//             setDogImage(res.data.message)
//         } catch (error) {
//             alert("Api error")
//         } finally {
//             setIsLoadingDog(false)
//         }
// }
useEffect(()=>{fetchDog()},[])
    return<div>
        Wciśnij przycisk jeśli chcesz zobaczyć jak wygląda przykładowy pies.<br/>
        <button onClick={fetchDog}>Wyświetl psa</button><br />
        {
            isLoadingDog && <p>Loading...</p>
        }
        {
            dogImages.map(imageUrl => <img key={imageUrl} src={imageUrl}/>)
        }
        {/* <img src={dogImage}/> */}
    </div>
}