import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import AddUserPage from "./pages/AddUserPage";
import NoPage from "./pages/NoPage";
import CollegeListPage from "./pages/CollegeListPage";
import UpdateUserPage from "./pages/UpdateUserPage";
import { Fragment } from "react";
import Sidebar from "./component/Sidebar/";
function App() {
  return (
    <Fragment>
      <Sidebar >
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/addUser" element={<AddUserPage />} />
          <Route path="/updateUser" element={<UpdateUserPage />} />
          <Route path="/collegeList" element={<CollegeListPage />} />
          <Route path={"*"} element={<NoPage />} />
        </Routes></Sidebar>
    </Fragment>
  );
}

export default App;
