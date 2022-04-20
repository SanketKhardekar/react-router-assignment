import { Button, Grid } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CardViewComponent from "../component/CardViewComponent";
import DetailedUserView from "../component/DetailedUserView";
import DialogComponent from "../component/DialogComponent";
import TableViewComponent from "../component/TableViewComponent";
const UserListPage = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [detailedUser, setDetailedUser] = useState(null);
  const [openDetailDialog, setOpenDetailDialog] = useState(false);
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
  const onDetailedDialogOpenHandler = (id) => {
    let userArray = users.filter((user) => user.id === id);
    const user = userArray[0];
    setDetailedUser(user);
    setOpenDetailDialog(true);
  };
  const tableColumns = [
    { field: "id", headerName: "SR.NO", flex: 0 },
    { field: "name", headerName: "NAME", flex: 0.5 },
    { field: "birthDate", headerName: "BIRTH DATE", flex: 0.5 },
    { field: "college", headerName: "COLLEGE", flex: 1 },
    { field: "shortBio", headerName: "BIO", flex: 0.5 },
  ];
  const onDeleteHandler = (id) => {
    const filteredDeletedUser = users.filter((user) => user.id !== id);
    setUsers(filteredDeletedUser);

    localStorage.setItem("users", JSON.stringify(filteredDeletedUser));
    setOpenDetailDialog(false);
  };
  const onUpdateHandler = (user) => {
    setOpenDetailDialog(false);
    navigate("/updateUser", { state: user });
  };
  return (
    <Fragment>
      <Button
        style={{ margin: "30px" }}
        variant="contained"
        onClick={onButtonClick}
        color="error"
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
        <Grid item lg={2} xs={2}>
          <h4 style={{ padding: "20px" }}>Card View</h4>
        </Grid>
        <Grid item lg={2} xs={2}>
          <Switch
            checked={isTableView}
            onChange={() => {
              setIsTableView(!isTableView);
            }}
            value="checked"
          />
        </Grid>
        <Grid item lg={2} xs={2}>
          <h4 style={{ padding: "20px" }}>Table View</h4>
        </Grid>
      </Grid>
      {isTableView ? (
        <Grid conatiner>
          <Grid item lg={8} md={10} xs={12} style={{padding:"10px"}}>
            <TableViewComponent
              user
              columns={tableColumns}
              rows={users.reverse()}
              onClick={onDetailedDialogOpenHandler}
            />
          </Grid>
        </Grid>
      ) : (
        <CardViewComponent data={users.reverse()} onClick={onDetailedDialogOpenHandler} />
      )}

      <DialogComponent
        open={openDetailDialog}
        onClose={() => {
          setOpenDetailDialog(false);
        }}
      >
        <DetailedUserView
          user={detailedUser}
          onDelete={onDeleteHandler}
          onUpdate={onUpdateHandler}
        />
      </DialogComponent>
    </Fragment>
  );
};
export default UserListPage;
