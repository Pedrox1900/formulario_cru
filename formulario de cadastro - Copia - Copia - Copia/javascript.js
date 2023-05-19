const form = document.getElementById('form')
const campos = document.querySelectorAll('.required');
const label = document.querySelectorAll('.label-required')
const spans = document.querySelectorAll('.spans');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

//função para enviar formulario se tudo estiver correto/ verifica todos os campos e depois envia
form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    telValidate();
    mainPasswordValidate();
    comparePassword();
})


//função que motra uma borda vermelha indicando erro e um span mostrando o motivo
function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

//função para validar campo/remover erro
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

//validação do campo nome
//se o tamanho do nome for menor que 3 caracteres exibir errro caso contrario o nome será validade com sucesso
function nameValidate(){
    if(campos[0].value.length < 3) {
       setError(0);
    }
    else {
        removeError(0);
    }
}


//validação de celular
function telValidate(){
    if(campos[2].value.length < 11) {
       setError(2);
    }
    else {
        removeError(2);
    }
}


//validação do email
function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }
    else {
        removeError(1);
    }
}


//validação da senha
function mainPasswordValidate(){
    if(campos[3].value.length < 8){
        setError(3);
    }
    else {
        removeError(3);
        comparePassword();
    }
}


//função para comparar as senhas
function comparePassword(){
    if(campos[3].value == campos[4].value && campos[4].value.length >= 8)
    {
        removeError(4);
    }
    else {
        setError(4);
    }
}
