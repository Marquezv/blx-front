import { registerUser } from './routes.js'
import { validate_input } from "./tools.js"

function variaveis(){
    const form_register = document.getElementById('form-register'),
        input_name = document.getElementById('name'),
        input_telephone = document.getElementById('telephone'),
        input_password = document.getElementById('password')
    return [form_register, input_name, input_telephone, input_password]
}
const [form_register, input_name, input_telephone, input_password] = variaveis()

function sendToBack(){
    form_register.onsubmit = (event) =>{
        event.preventDefault()
        const input_group = form_register.getElementsByTagName('input')
        
        if(validate_input(input_group)){
            const name = input_name.value
            const telephone = input_telephone.value
            const password = input_password.value

            registerUser(name, telephone, password)
            console.log(validate_input(input_group))  
        }
        
        
    }
}
sendToBack()