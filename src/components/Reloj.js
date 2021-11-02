import React, {useRef, useState} from 'react'

export default function RelojHooks (){
    let refMenu = useRef()
    let refMenuBtn = useRef()
    let refMenu2 = useRef()
    let refMenuBtn2 = useRef()

    const [terminos, setTerminos] = useState(true)

   
    
    console.log( refMenuBtn)
    const handleToggleMenuRm=(e)=>{

        if(refMenuBtn.current.textContent === 'Cerrar'){
            refMenuBtn.current.textContent = 'Jugadores'
             refMenu.current.style.display = 'block'
        }else{
            refMenuBtn.current.textContent= 'Cerrar'
            refMenu.current.style.display = 'none'
        }
    }
    const handleToggleMenuBar=(e)=>{
        if(refMenuBtn2.current.textContent === 'Cerrar'){
            refMenuBtn2.current.textContent = 'Jugadores'
             refMenu2.current.style.display = 'block'
        }else{
            refMenuBtn2.current.textContent= 'Cerrar'
            refMenu2.current.style.display = 'none'
        }
    }

    const handleSubmit = e =>{
        e.preventDefault()
        alert('Peligro, hackers')
    }
    

    return(
        <>
        <div>
            <h2>Real Madrid</h2>
            <button onClick={handleToggleMenuRm} ref={refMenuBtn}>Jugadores</button>
            <nav  ref={refMenu}>
            <a href="https://es.wikipedia.org/wiki/Karim_Benzema">Benzema</a>
            <br/> 
            <a href="#">Kroos</a>
            <br/> 
            <a href="#">Isco</a>
            <br/> 
            <a href="#">Hazard</a>
            </nav>
        </div>
        <div>
            <h2>Barcelona</h2>
            <button onClick={handleToggleMenuBar} ref={refMenuBtn2}>Jugadores</button>
            <nav  ref={refMenu2}>
            <a href="#">Dembele</a>
            <br/> 
            <a href="#">Pedri</a>
            <br/> 
            <a href="#">Gavi</a>
            <br/> 
            <a href="#">Pique</a>
            </nav>
            <br/>
            <label htmlFor="terminos">Acepto terminos y condiciones</label>
            <input checked  id="terminos" name="terminos" type="checkbox" onChange={(e)=> setTerminos(e.target.checked)}/>
            
            <form onSubmit={handleSubmit}>
                <input type="submit" value="caution"/>
            </form>
        </div>
        </>
    )
}