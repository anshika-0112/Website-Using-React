import { AUTHENTICATED } from "./authTypes"

export const authenticate=()=>
{
    return{
        type:AUTHENTICATED,
    }
}