import './App.css';
import { useEffect, useState } from "react"

function App() {

  useEffect(()=>{

    var columns = Math.floor(document.body.clientWidth / 50);
    var rows = Math.floor(document.body.clientHeight / 50);
    var wrapper = document.getElementById("wrapper");

    function createTile(index){

      const tile = document.createElement("div");

      tile.classList.add("tile");
      tile.setAttribute("id", index)

      return tile
    }

    function createTiles(quantity){

      Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index))
      })

    }

    function onResize(){

      wrapper.innerHTML = "";

      columns = Math.floor(document.body.clientWidth / 50);
      rows = Math.floor(document.body.clientHeight / 50);

      wrapper.style.setProperty("--columns", columns);
      wrapper.style.setProperty("--rows", rows);

      createTiles(columns*rows)

    };

    onResize();

    window.addEventListener('resize', onResize)

  },[])

  return (
    <div className="App" id="wrapper">
      
    </div>
  );
}

export default App;
