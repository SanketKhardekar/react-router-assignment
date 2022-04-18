import {
  Autocomplete,
  Button,
  Card,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import * as services from "../services";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import Creatable from "react-select/creatable";

const hobbiesOptions = [
  { label: "Reading", value: "Reading" },
  { label: "Gaming", value: "Gaming" },
  { label: "Traveling", value: "Traveling" },
  { label: "Drawing", value: "Drawing" },
  { label: "Reading", value: "Reading" },
];
const UserForm = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState(props.update ? props.user.name : "");

  const [address, setAddress] = useState(
    props.update ? props.user.address : ""
  );

  const [countryValue, setCountryValue] = useState(
    props.update ? props.user.country : ""
  );
  const [countryList, setCountryList] = useState([]);
  const [isCountryLoading, setIsCountryLoading] = useState(false);

  const [collegeList, setCollegeList] = useState([]);
  const [collegeValue, setCollegeValue] = useState(
    props.update ? props.user.college : ""
  );
  const [isCollegeLoading, setIsCollegeLoading] = useState(false);

  const [birthDate, setBirthDate] = useState(
    props.update ? props.user.birthDate : "1990-08-18"
  );

  const [gender, setGender] = useState(props.update ? props.user.gender : "");

  const [hobbies, setHobbies] = useState(props.update ? props.hobbies : "");
  console.log(hobbies);
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
    const getCountryData = async () => {
      setIsCountryLoading(true);
      const response = await services.getCountriesAPI();
      let countiresData = [];
      response.data.forEach((element) => {
        countiresData.push(element.name.common);
      });
      setCountryList(countiresData.sort());
      setIsCountryLoading(false);
    };
    getCountryData();
  }, []);
  useEffect(() => {
    const getCollegeData = async (name) => {
      setIsCollegeLoading(true);
      const response = await services.getCollegesAPI(null, name);
      let collegeData = [];
      response.data.forEach((element) => {
        collegeData.push(element.name);
      });
      setCollegeList(collegeData);
      setIsCollegeLoading(false);
    };
    if (countryValue) {
      getCollegeData(countryValue);
    }
  }, [countryValue]);
  return (
    <Grid
      container
      spacing={1}
      sx={{ height: "fit-content", width: "100%", margin: "30px" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={6} xs={8}>
        <Card sx={{ padding: "50px" }} elevation={10}>
          <Grid
            container
            spacing={10}
            direction="row"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Grid item>
              <h1>{props.update ? "Update User Form" : "Add User Form"}</h1>
            </Grid>
          </Grid>
          <form onSubmit={onSubmitHandler}>
            <Grid
              container
              columnSpacing={2}
              rowGap={4}
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
                <FormControl fullWidth>
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    defaultValue=""
                    required
                    label="Gender"
                    value={gender}
                    labelId="gender-label"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <MenuItem value="Male">MALE</MenuItem>
                    <MenuItem value="Female">FEMALE</MenuItem>
                    <MenuItem value="Transgender">TRANSGENDER</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                {isCountryLoading ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <FormControl fullWidth>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                      defaultValue=""
                      required
                      value={countryValue}
                      labelId="country-label"
                      onChange={(e) => {
                        setCountryValue(e.target.value);
                      }}
                    >
                      {countryList.map((element, index) => (
                        <MenuItem key={index} value={element}>
                          {element}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                {isCollegeLoading ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <Autocomplete
                    value={collegeValue}
                    onChange={(e, newValue) => {
                      setCollegeValue(newValue);
                    }}
                    id="college-list"
                    options={collegeList}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} required label="College" />
                    )}
                  />
                )}
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <FormControl fullWidth>
                  <Creatable
                    styles={{width:"100%",heigth:"100%"}}
                    isClearable
                    isMulti
                    placeholder="Hobbies"
                    onChange={(value) => {
                      setHobbies(value);
                    }}
                    options={hobbiesOptions}
                    value={hobbies}
                  />
                </FormControl>
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
export default UserForm;