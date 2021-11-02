import React, {useState, useEffect} from "react";


export const App= ()=>{

    const [add, setAdd] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    const suma = ()=> setAdd(add + 1)
    const resta = ()=> setAdd (add - 1)

   useEffect(()=>{
       function scroll (){ setScrollY(window.scrollY)}

       window.addEventListener('scroll', scroll)

       return()=>{
           window.removeEventListener('scroll', scroll)
       }
   }, [])

    return(
        <>
        <h1>{add}</h1>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <h2>Haz clickeado {add} veces</h2>
        <h3>{scrollY}</h3>
        <h1>{add}</h1>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <h2>Haz clickeado {add} veces</h2>
        <h3>{scrollY}</h3>
        <h1>{add}</h1>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <h2>Haz clickeado {add} veces</h2>
        <h3>{scrollY}</h3>
        <h1>{add}</h1>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <h2>Haz clickeado {add} veces</h2>
        <h3>{scrollY}</h3>
        <h1>{add}</h1>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <h2>Haz clickeado {add} veces</h2>
        <h3>{scrollY}</h3>
        <h1>{add}</h1>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <h2>Haz clickeado {add} veces</h2>
        <h3>{scrollY}</h3>
        <h1>{add}</h1>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <h2>Haz clickeado {add} veces</h2>
        <h3>{scrollY}</h3>

        </>
        
    )
}



    
        
   