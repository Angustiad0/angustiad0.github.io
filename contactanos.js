const formInputs = {
    "nombre": null,
    "email": null,
    "telefono": null,
}; // Object JSON Javascript Object Notation /// Javascript Object

document.addEventListener("DOMContentLoaded", ()=>{
    initPageLoad();
});

function initPageLoad(){
    formInputs.nombre = document.getElementById("txtNombre");
    formInputs.email = document.getElementById("txtEmail");
    formInputs.telefono = document.getElementById("txtnumero");
    document.getElementById("formulario").addEventListener("submit", (e)=>{
        const [errors, isValid] = validateForm();
        if(!isValid) {
            alert("Formulario no Valido");
            console.log("Form Errors", errors);
            e.preventDefault();
            e.stopPropagation();
        }
    });
}

function validateForm(){
    let errors = [];
    if(isEmpty(formInputs.nombre.value)){
        errors.push("El campo nombre no puede estar vacio");
    }
    if(!isEmail(formInputs.email.value)){
        errors.push("El campo email no es valido");
    }
    if(!isPhone(formInputs.telefono.value)){
        errors.push("El campo telefono no es valido");
    }
    console.log("Form Inputs", formInputs);
    return [errors, errors.length == 0];
}

// Validadores
function isEmpty(value){
    return /^\s*$/.test(value);
}

function isEmail(value){
    return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
}

function isPhone(value) {
    // Modifica esta expresión regular según el formato de teléfono esperado
    return /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/.test(value);
}
