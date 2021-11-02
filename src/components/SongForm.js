import React, {useState} from 'react'

const initialForm={
    artist:"",
    song:""
}

export const SongForm = ({handleSearch}) => {

    const [form, setForm] = useState(initialForm)

    const handleChange = (e)=>{
        setForm({
            ...form,[e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!form.artist || !form.song){
            alert("Debes llenar todos los campos")
            return
        }
        handleSearch(form)
        setForm(initialForm)
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <input type="text" placeholder="Nombre del Artista" name="artist" onChange={handleChange} value={form.artist} autoFocus/>
                <input type="text" placeholder="Nombre de la Cancion" name="song" onChange={handleChange} value={form.song}/>
                <input type="submit" value="Enviar"/>
            </form>
 
        </div>
    )
}
export default SongForm