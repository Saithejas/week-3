// email
const validEmail = (email) =>{
    // regex :- regular expression used for checking similar p
    return email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}
const validPass = (password)=>{
    return password.match(/^[a-fA-F0-9
}
module.export = {validEmail,validPass}