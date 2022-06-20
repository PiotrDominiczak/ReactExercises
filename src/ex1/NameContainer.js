import React from 'react';
import { NameDisplay } from "./NameDisplay";


export const NameContainer = () => {

    const [name, setName] = React.useState('')

    return <div> Name container 
        <input value={name} onChange={(event) => setName(event.target.value)}/>
        <NameDisplay name={name} />
    </div>
}

