import { Button, Grid} from "@mui/material";
import Switch from '@mui/material/Switch';
import { useEffect, useState, Fragment } from "react";
import CardViewComponent from "../component/CardViewComponent";
import DetailedUserView from "../component/DetailedUserView";
import DialogComponent from "../component/DialogComponent";
import TableViewComponent from "../component/TableViewComponent";
const UserListPage = (props) => {
  const [users, setUsers] = useState([]);
  const [detailedUser, setDetailedUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isTableView, setIsTableView] = useState(false);
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
  const onDialogOpenHandler = (id) => {
    let userArray = users.filter((user) => user.id === id);
    const user = userArray[0];
    setDetailedUser(user);
    setOpenDialog(true);
  };
  const tableColumns = [
    { field: "id", headerName: "SR.NO", flex: 0 },
    { field: "name", headerName: "NAME", flex: 1 },
    { field: "birthDate", headerName: "BIRTH DATE", flex: 0 },
    { field: "college", headerName: "COLLEGE", flex: 1 },
    { field: "smallBio", headerName: "BIO", flex: 2 },
  ];
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
      <Grid
        container
        alignItems="center"
        style={{ marginLeft: "30px" }}
        spacing={1}
      >
        <Grid item>Card View</Grid>
        <Grid item>
          <Switch
            checked={isTableView} // relevant state for your case
            onChange={() => {
              setIsTableView(!isTableView);
            }} // relevant method to handle your change
            value="checked" // some value you need
          />
        </Grid>
        <Grid item>Table View</Grid>
      </Grid>
      {isTableView ? (
        <TableViewComponent columns={tableColumns} rows={users} />
      ) : (
        <CardViewComponent data={users} onClick={onDialogOpenHandler} />
      )}

      <DialogComponent
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
      >
        <DetailedUserView user={detailedUser} />
      </DialogComponent>
    </Fragment>
  );
};
export default UserListPage;
