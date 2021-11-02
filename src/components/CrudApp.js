import React, {useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDb = [
    {
        id:1,
        name:"Miguel Salazar",
        pregunta: "Captiva, impulsadores"
    },
    {
        id:2,
        name:"Lorena Salazar",
        pregunta: "Sprint, impulsadores"
    },
    {
        id:3,
        name:"Sofia Salazar",
        pregunta: "Swift, impulsadores"
    },
    {
        id:4,
        name:"Andres",
        pregunta: "Reanult, impulsadores"
    },
    {
        id:5,
        name:"Pedro",
        pregunta: "Bmw M3, impulsadores"
    }
]


export default function CrudApp() {

    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (data)=>{
        data.id = Date.now()
        
        setDb([...db, data])

    }
    const updateData = (data)=>{
        let newData = db.map((el) =>(el.id=== data.id?data:el))
        setDb(newData)

    }
    const deleteData = (id)=>{
        let confirm = window.confirm('Estas seguro que deseas eliminar el `${id}`')
        if(confirm){
            let newData = db.filter(el=> el.id !== id)
            setDb(newData)
        }else{
            return
        }
    }

    return (
        <div>
            <h2>Hola</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db}  setDataToEdit={setDataToEdit} deleteData = {deleteData}/>
        </div>
    )
 }






