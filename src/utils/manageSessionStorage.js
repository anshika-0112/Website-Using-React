export const getItem=(key)=>
{
    if(sessionStorage.getItem(key))
    return JSON.parse(sessionStorage.getItem(key));
    else
    return[];
}

export const setItem=(key,value)=>{
    return sessionStorage.setItem(key,value);
}

export const removeItem=(key)=>
{
    return sessionStorage.removeItem(key);
}