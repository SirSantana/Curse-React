
const ExercisesJs = (numero = undefined, descuento = undefined)=>{

    let resultado = ((numero - ((descuento * numero)/100)) * 1.19/100)


    return console.log(`El total era ${numero}, con descuento ${descuento}, quedo en ${resultado}`)
}
ExercisesJs(85000, 10)