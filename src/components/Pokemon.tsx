import { useCallback, useLayoutEffect, useEffect, useRef, useState } from "react";
import "./Pokemon.css"

export default function Pokemon() {

  const [disabled, setDisabled] = useState(false);
  const [id, setId] = useState(Math.ceil(Math.random() * 10));
  
  console.log("rendered")
/*
  useEffect(() => {
    console.log("loading image");
    fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`)
      .then(res => res.blob()) // Gets the response and returns it as a blob
      .then(blob => {
        let objectURL = URL.createObjectURL(blob);
        setImg(imgurl => objectURL)
      });

  },[id])
  */

  useEffect(() => {
      return () => {document.getElementById("pokeimg").dataset.stage = "rest"}
  },[id]);



  const vote = useCallback(async () => {

    document.getElementById('pokeimg').dataset.stage = "swipe-left";
    setDisabled(disabled => true);
    fetch(`/api/id/${id}`, { method: 'PUT' }).then(_ => {
      setDisabled(disabled => false);
      setId(Math.ceil(Math.random() * 10))

    })
  }, [id]);

  const reject = () => {
    

    document.getElementById("pokeimg").dataset.stage = "swipe-right";

    setTimeout(() => {
    setDisabled(false); 
    setId(Math.ceil(Math.random() * 10)) 
    },1000);
  }

  return (
    <div>

      <div className="flex content-center col-span-2">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} id="pokeimg" data-stage="rest" />
      </div>
      <div className="flex content-center gap-16">
        <div className="flex">
          <button onClick={vote} disabled={disabled} className="bg-[#FFC8DD] rounded-full hover:bg-[#FFAFCC] content-center"></button>
        </div>
        <div className="flex">
          <button onClick={reject} disabled={disabled} className="rounded-full bg-[#BDE0FE] hover:bg-[#A2D2FF] content-center"></button>
        </div>
      </div>
    </div>

  )
}
