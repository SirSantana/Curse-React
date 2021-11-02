import React from 'react'
import {useForm} from '../hooks/useForm'
import Loader from './Loader'
import Message from './Message'

const initialForm = {
    name:"",
    email:"",
    subject:"",
    comments:"",
    date:""
  };
const validationsForm =(form)=>{
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name = "Debes colocar el 'Nombre'"
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo es invalido"
    }

    if(!form.email.trim()){
        errors.email = "Debes colocar un 'Email'"
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo es invalido"
    }

    if(!form.subject.trim()){
        errors.subject = "Debes colocar un 'subject'"
    }

    if(!form.comments.trim()){
        errors.comments = "Debes colocar un 'comments'"
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "Campo invalido"
    }
   if(!form.date){
       errors.date = "Debes colocar la fecha"
   }
    
    return errors
}

const ContactForm = () => {
    const {
      form,
      errors,
      loading,
      response,
      handleChange,
      handleBlur,
      handleSubmit,
    } = useForm(initialForm, validationsForm);
  
    return (
      <div>
        <h2>Formulario de Contacto</h2>
        <form onSubmit={handleSubmit}>
        
          <input
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          {errors.name && <p>{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Escribe tu email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p>{errors.email}</p>}
          
          <input
            type="text"
            name="subject"
            placeholder="Asunto a tratar"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
          />
          {errors.subject && <p>{errors.subject}</p> }
          <input
            type="date"
            name="date"
            placeholder="Asunto a tratar"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.date}
            required
          />
          {errors.date && <p>{errors.date}</p>}
          
          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Escribe tus comentarios"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          ></textarea>
          {errors.comments && <p>{errors.comments}</p>}
          <input type="submit" value="Enviar"/>
          
        </form>
        {loading && <Loader/>}
        {response && <Message msg="Los datos han sido enviados" bgColor="#198754"/>}
      </div>
    );
  };
  
  export default ContactForm;