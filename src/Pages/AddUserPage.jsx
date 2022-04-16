import {
  Button,
  Card,
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import * as services from "../services";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const AddUserPage = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [address, setAddress] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [isCountryLoading, setIsCountryLoading] = useState(false);
  const [countryValue,setCountryValue]=useState('')
  const [birthDate, setBirthDate] = useState("1990-08-18");

  const [gender, setGender] = useState('');
  const onSubmitHandler = () => {
    const user = {
      id: Math.floor(1000 + Math.random() * 9000),
      name,
      address,
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
  useEffect(() => {
    const getCollegeData = async () => {
      setIsCountryLoading(true);
      const response = await services.getCountriesAPI();
      setCountryList(response.data);
      setIsCountryLoading(false);
    };
    getCollegeData();
  }, []);
  return (
    <Grid
      container
      spacing={1}
      sx={{ height: "fit-content", width: "100%", margin: "10px" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={6} xs={12}>
        <Card variant="outlined">
          <Grid
            container
            spacing={10}
            direction="row"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item md={12} xs={12}>
              <h1>Add Student Form</h1>
            </Grid>
          </Grid>
          <form onSubmit={onSubmitHandler}>
            <Grid
              container
              columnSpacing={2}
              rowGap={1}
              sx={{ padding: "0 30px" }}
            >
              <Grid item lg={4} md={6} xs={12}>
                <TextField
                  fullWidth
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
              <Grid item lg={4} md={6} xs={12}>
                <TextField
                  fullWidth
                  type="date"
                  variant="outlined"
                  required
                  label="Birth Date"
                  value={birthDate}
                  margin="normal"
                  onChange={(e) => {
                    setBirthDate(e.target.value);
                  }}
                />
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <TextField
                  fullWidth
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
              <Grid item lg={4} md={6} xs={12}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  defaultValue=""
                  required
                  value={gender}
                  labelId="gender-label"
                  fullWidth
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <MenuItem value="Male">MALE</MenuItem>
                  <MenuItem value="Female">FEMALE</MenuItem>
                  <MenuItem value="Transgender">TRANSGENDER</MenuItem>
                </Select>
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                {isCountryLoading ? (
                  <Box sx={{display:"flex",padding:'30px',flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                  <CircularProgress /></Box>
                ) : (
                  <Fragment>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                      defaultValue=""
                      required
                      value={countryValue}
                      labelId="country-label"
                      fullWidth
                      onChange={(e) => {
                        setCountryValue(e.target.value);
                      }}
                    >
                      {countryList.map((element)=> <MenuItem value={element.country}>{element.country}</MenuItem>)}
                    </Select>
                  </Fragment>
                )}
              </Grid>
              <Grid item md={12} xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                  size="large"
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};
export default AddUserPage;
