import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import UserListPage from "./Pages/UserListPage";
import AddUserPage from "./Pages/AddUserPage";
import AppbarComponent from "./component/AppbarComponent";
import NoPage from "./Pages/NoPage";
import CollegeListPage from "./Pages/CollegeListPage";
function App() {
  return (
    <Fragment>
      <AppbarComponent />
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/addUser" element={<AddUserPage />} />
        <Route path="/collegeList" element={<CollegeListPage />} />
        <Route path={"*"} element={<NoPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
