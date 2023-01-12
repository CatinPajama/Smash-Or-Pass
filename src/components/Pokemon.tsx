import { useCallback, useState} from "react";
import "./Pokemon.css"

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
            
            <div className="flex content-center col-span-2">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
            </div>
            <div className="flex content-center gap-16">
            <div className="flex">
            <button onClick={vote} disabled={disabled} className="bg-[#FFC8DD] rounded-full hover:bg-[#FFAFCC] content-center"></button>
            </div>
            <div className="flex">
            <button onClick={() => { setDisabled(false); setId(Math.ceil(Math.random() * 10)) }} disabled={disabled} className="rounded-full bg-[#BDE0FE] hover:bg-[#A2D2FF] content-center"></button>
            </div>
            </div>
        </div>

    )
}
