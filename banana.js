let message=document.querySelector('#message')
let tbtn=document.querySelector('#btn');
let translate=document.querySelector('#translated')

let serverUrl='https://api.funtranslations.com/translate/minion.json';
function createUrl(text){
    return serverUrl+'?'+'text='+text;
}
function errorHandle(error){
    alert('Sorry the server is not responding, try after some time')
}
function clickhandle(){
    let input=message.value
    fetch(createUrl(input))
    .then(Response=>Response.json())
    .then(json=> translate.innerText= json.contents.translated)
    .catch(errorHandle)
}
tbtn.addEventListener('click',clickhandle)
