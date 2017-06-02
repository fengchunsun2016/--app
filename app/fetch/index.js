import 'whatwg-fetch';
import 'es6-promise';

export function get(url) {
    return fetch(url,{Accept:'application/json'});
}


function toUrlencoded(obj) {
    let arr = [];
    for(var key in obj){
        arr.push(`${key}=${obj[key]}`);
    }
    return arr.join('&');
}

export function post(url,obj) {
    console.log(obj);
    return fetch(url,{
        method:"post",
        header:{
            'Content-type':'application/x-www-form-urlencoded'
        },
        body:toUrlencoded(obj)
    });
}


