import { TextField } from "@mui/material";
import { Fragment, useState } from "react";
import * as services from "../services"
import TableViewComponent from "../component/TableViewComponent";
import styles from "./CollegeListPage.module.css";
const CollegeListPage = (props) => {
  const [colleges, setColleges] = useState([]);
  const [searchName, setSearchName]=useState("")
  const columns = [
    { field: "id", headerName: "SR.NO", flex:0 },
    { field: "country", headerName: "COUNTRY", flex:1 },
    { field: "name", headerName: "COLLEGE NAME", flex:2},
  ];
  const callSearchCollege=async()=>{
    if(searchName)
    {
       const response= await services.getCollegesAPI(searchName,'')
       let tempColleges=[]
       response.data.forEach((element,index) => {
           tempColleges.push({id:index++, ...element})
       });
       setColleges(tempColleges)
    }
  }
  return (
    <Fragment>
      <div className={styles.container}>
        <h2>College List Page</h2> <br />
        <br />
        <TextField
          id="search-college"
          label="Search College"
          value={searchName}
          variant="outlined"
          onChange={(e)=> setSearchName(e.target.value)}
          onKeyDown={(e)=>{
              if(e.key === 'Enter')
              {
                  callSearchCollege()
              }
          }}
        />
        <br />
        <br />
        <div className={styles.tableContainer}>
          <TableViewComponent columns={columns} rows={colleges} />
        </div>
      </div>
    </Fragment>
  );
};
export default CollegeListPage;
