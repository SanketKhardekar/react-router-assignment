import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserListPage from "./Pages/UserListPage";
import AddUserPage from "./Pages/AddUserPage";
import AppbarComponent from "./component/AppbarComponent";
import NoPage from "./Pages/NoPage";
import CollegeListPage from "./Pages/CollegeListPage";
import UpdateUserPage from "./Pages/UpdateUserPage";
import { Fragment } from "react";
function App() {
  return (
    <Fragment><div className="App">
      <AppbarComponent />
      
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/addUser" element={<AddUserPage />} />
          <Route path="/updateUser" element={<UpdateUserPage />} />
          <Route path="/collegeList" element={<CollegeListPage />} />
          <Route path={"*"} element={<NoPage />} />
        </Routes></div>
    </Fragment>
  );
}

export default App;
