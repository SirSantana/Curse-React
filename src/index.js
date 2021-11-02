import React from 'react'
import ReactDom from 'react-dom'
import {App} from './app'
import  ContactForm  from './components/ContactForm'
import  CrudApi  from './components/CrudApi'
import CrudApp from './components/CrudApp'
import Modals from './components/Modals'
import RelojHooks from './components/Reloj'
import SelectAnidados from './components/SelectAnidados'
import SongSearch from './components/SongSearch'
import ExercisesJs from './components/ExercisesJs'



// ReactDom.render(<SongSearch/>, document.getElementById('Groot'))
// ReactDom.render(<RelojHooks/>, document.getElementById('Groot'))
// ReactDom.render(<SelectAnidados/>, document.getElementById('Groot'))
// ReactDom.render(<Modals  />, document.getElementById('Groot'))
ReactDom.render(<ExercisesJs/>, document.getElementById('Groot'))