import {Route, Switch, useRouteMatch} from "react-router-dom"

const Contact=()=>
{
    let match=useRouteMatch();
    
    return(
        <>
        <h1>Contact</h1>
        <p>Hello...</p>
        <Switch>
            <Route path={`${match.path}/email`} render={()=> (<h1>Email Not Found</h1>)}/>
            <Route path="/phone" render={()=> (<h1>Phone Not Found</h1>)}/>
            <Route path="*" render={()=> (<h1>Not Found</h1>)}/>
        </Switch>
        </>
    );
}

export default Contact;