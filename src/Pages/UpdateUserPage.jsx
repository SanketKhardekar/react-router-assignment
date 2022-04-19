import { Fragment } from "react";
import { useLocation } from "react-router"
import UserForm from "../component/UserForm";
const UpdateUserPage=(props)=>{
    const { state} =useLocation();
    if(!state)
    {
        return(<h1 style={{margin:"70px"}}>User Data No Found</h1>)
    }
    return(
        <Fragment>
            <UserForm update={true} user={state}/>
        </Fragment>
    )
}
export default UpdateUserPage;