import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUserPage = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [address, setAddress] = useState("");

  const [company, setCompany] = useState("");

  const [age, setAge] = useState("");
  const onSubmitHandler = () => {
    const user = {
    id:Math.random(),
      name,
      address,
      company,
      age,
    };
    const users = localStorage.getItem("users");
    let usersArray = [];
    if (users) {
      usersArray = JSON.parse(users);
      usersArray.push(user);
      localStorage.setItem("users", JSON.stringify(usersArray));
    } else {
      usersArray.push(user);
      localStorage.setItem("users", JSON.stringify(usersArray));
    }
    navigate("/", { replace: true });
  };
  return (
    <Grid
      container
      spacing={9}
      sx={{ width: "100%", marginTop: "50px" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Card variant="outlined">
        <CardHeader title="User Form" />
        <CardContent>
          <Grid item md={12} xs={12}>
            <TextField
              variant="outlined"
              required
              label="Name"
              value={name}
              margin="normal"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              variant="outlined"
              required
              label="Address"
              value={address}
              margin="normal"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              variant="outlined"
              required
              label="Company"
              value={company}
              margin="normal"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              variant="outlined"
              required
              label="Age"
              value={age}
              type="number"
              margin="normal"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <Button
              onClick={onSubmitHandler}
              variant="contained"
              color="success"
              size="large"
            >
              SUBMIT
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default AddUserPage;
