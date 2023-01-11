import { useCallback, useEffect, useState, useRef } from "react";


// const loadImage = async (id: Number) => {
//     const res = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
//     const imageBlob = await res.blob();
//     const imageObjectURL = URL.createObjectURL(imageBlob);
//     return imageObjectURL;
// }

// const ImageComponent = async ({ id }) => {


//     const img = loadImage(id);

//     return <img src={img} />

// }

export default function Pokemon() {

    const [disabled, setDisabled] = useState(false);
    const [id, setId] = useState(Math.ceil(Math.random() * 10));

    const vote = useCallback(async () => {
        setDisabled(disabled => true);
        fetch(`/api/id/${id}`, { method: 'PUT' }).then(_ => {
            setDisabled(disabled => false);
            setId(Math.ceil(Math.random() * 10))
        })
    }, [id]);


    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <button onClick={vote} disabled={disabled}>Smash</button>
            <button onClick={() => { onclick }}>Pass</button>
        </div>

    )
}