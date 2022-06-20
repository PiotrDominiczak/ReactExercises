import { useState } from "react";
export const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const onGetSearchHandler = () => {
        props.onSearchTerm(searchTerm)
    }
    return <div>
        Search
        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <button onClick={onGetSearchHandler}>Get Search</button>
    </div>
}