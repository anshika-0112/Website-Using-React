import {SET_PEOPLE_LIST} from "./detailTypes"

export const setPeopleList=(peopleList)=>
{
    return{
        type:SET_PEOPLE_LIST,
        value:peopleList
    }
}