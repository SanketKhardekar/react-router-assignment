import { Dialog } from "@mui/material"

const DialogComponent=(props)=>{
    return <Dialog open={props.open} onClose={props.onClose}>
        <div style={{padding:"80px", width: "400px"}}>
            {props.children}
        </div>
    </Dialog>
}
export default DialogComponent;