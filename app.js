const contenedorCookies = document.querySelector('.contenedor-cookies');
const aceptar = document.querySelector('#aceptar');
const cerrar = document.querySelector('#cerrar');

document.addEventListener('DOMContentLoaded', inicio);

function inicio(){
    if(getCookie('cookie') === 'aceptada'){
        cerrarCookie();
    } else {
      setTimeout(function(){
        contenedorCookies.style.display = 'grid';
      }, 3000);
    }   
}

aceptar.addEventListener('click', aceptarCookies);
cerrar.addEventListener('click', cerrarCookie);

function aceptarCookies(){
    setCookie('cookie', 'aceptada', 1);
    cerrarCookie();
}

function cerrarCookie(){
  contenedorCookies.style.display = 'none';
}

function deleiteCookie(nombre){
    document.cookie = `${nombre} = ; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}

function setCookie(name, value, days){
    let d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));

    const expiracion = 'expires=' + d.toUTCString();
    document.cookie = `${name} = ${value}; ${expiracion}`;
}

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

