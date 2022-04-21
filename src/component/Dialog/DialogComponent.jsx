import { Dialog } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
const DialogComponent=(props)=>{
    return <Dialog open={props.open}>
        <div style={{display:"flex",flexDirection:"row", justifyContent:"flex-end"}}>

        <CloseIcon onClick={props.onClose} fontSize="large"/>
        </div>
        <div style={{padding:"30px", width: "500px"}}>
            {props.children}
        </div>
    </Dialog>
}
export default DialogComponent;