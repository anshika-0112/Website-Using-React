import { CHECK_PASSWORD, CHECK_USERNAME, NOT_AUTHENTICATED,AUTHENTICATED } from "./loginTypes"

export const check_username=(e)=>
{
    return{
        type:CHECK_USERNAME,
        value:e.target.value
    }
}

export const check_password=(e)=>
{
    return{
        type:CHECK_PASSWORD,
        value:e.target.value
    }
}

export const not_authenticated=()=>
{
    return{
        type:NOT_AUTHENTICATED
    }
}

export const authenticated=()=>
{
    return{
        type:AUTHENTICATED
    }
}