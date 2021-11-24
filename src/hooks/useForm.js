import {useState, useEffect} from 'react'
import {helpHttp} from '../helpers/helpHttp'

export const useForm = (initialForm, validateForm) => {
    const [errors, setErrorss] = useState({})
    const [loading, setLoading ] = useState(false)
    const [response, setResponse] = useState(null)
    const [form, setForm] = useState(initialForm)

    const handleChange=(e)=>{
        const {name, value} = e.target;

        setForm({
            ...form,[name]:value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setErrorss(validateForm(form))

        if(Object.keys(errors).length === 0){
            alert('Enviando formulario')
            setLoading(true)
            helpHttp().post("https://formsubmit.co/ajax/salazarmiguelito23@gmail.com", 
            {body:form, headers:{"Content-Type":"aplication/json" ,Accept:"aplication/json"}})
            .then((res)=>{
                setLoading(false)
                setResponse(true)
                setForm(initialForm)
                setTimeout(() => setResponse(false), 5000);  
            })
        }else{
            return
        }
    }
    const handleBlur = (e)=>{
        handleChange(e)
        setErrorss(validateForm(form))
    }

    return{
        form,response, loading, errors, handleChange, handleSubmit, handleBlur
    }
   
}
