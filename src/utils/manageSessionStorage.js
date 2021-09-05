export const getItem=(key)=>
{
    return sessionStorage.getItem(key);
}

export const setItem=(key,value)=>{
    return sessionStorage.setItem(key,value);
}

export const removeItem=(key)=>
{
    return sessionStorage.removeItem(key);
}