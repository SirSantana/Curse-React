
import React from 'react'
import { useState, useEffect } from 'react'

const initialForm={
    
    name:"",
    pregunta:"",
    id:null
}

const CrudForm =({updateData, createData, dataToEdit, setDataToEdit})=> {
    
    const [form, setForm] = useState(initialForm)

    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit)

        }else{
            setForm(initialForm)
        }
    }, [dataToEdit])

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        }
        )
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!form.name || !form.pregunta){
            alert("Debes llenar todos los campos")
            return;
        }
        if(form.id === null){
            createData(form)
        }
        else{
            updateData(form)
        }
        handleReset();
    }
    const handleReset = (e)=>{
        setForm(initialForm)
        setDataToEdit(null)
    }


    return(
    <>
    <div>
        <h3>{dataToEdit?"Editar": "Preguntar Repuestos"}</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="text" name="pregunta" placeholder="Preguntas" onChange={handleChange}/>
            <input type="submit" value="caution"/>
            <input type="reset" value="La cague" onClick={handleReset}/>
        </form>
    </div>
    </>

    )
}
export default CrudForm


