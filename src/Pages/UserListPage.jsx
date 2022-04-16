import { Button } from "@mui/material";
import { useEffect, useState, Fragment } from "react";
import CardViewComponent from "../component/CardViewComponent";
import DetailedUserView from "../component/DetailedUserView";
import DialogComponent from "../component/DialogComponent";
const UserListPage = (props) => {
  const [users, setUsers] = useState([]);
  const [detailedUser, setDetailedUser ]=useState(null);
  const [openDialog,setOpenDialog]=useState(false)
  useEffect(() => {
    const list = localStorage.getItem("users");
    if (list) {
      setUsers(JSON.parse(list));
    }
  }, [users]);
  const onButtonClick = () => {
    localStorage.removeItem("users");
    setUsers([]);
  };
  
  return (
    <Fragment>
      <Button
        style={{ margin: "30px" }}
        variant="contained"
        onClick={onButtonClick}
        color="success"
        size="large"
      >
        CLEAR DATA
      </Button>
      <br />
      <CardViewComponent data={users} onClick={()=>{ setOpenDialog(true)}}/>
      <DialogComponent open={openDialog} onClose={()=>{setOpenDialog(false)}}>
        <DetailedUserView />
      </DialogComponent>
    </Fragment>
  );
};
export default UserListPage;
