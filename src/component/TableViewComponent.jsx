import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Fragment } from "react";

const TableViewComponent = (props) => {
  const onCellClickHandler = (params) => {
    props.onClick(params.row.id);
  };
  return (
    <Fragment>
      {props.rows.length > 0 ? (
        <div style={{ width: "96%", marginLeft: "30px",backgroundColor:"white"}}>
          <DataGrid
            autoHeight={true}
            disableExtendRowFullWidth={true}
            rows={props.rows}
            columns={props.columns}
            pageSize={props.rows.length > 10 ? 5 : props.rows.length}
            onCellClick={props.user ? onCellClickHandler : () => {}}
          />
        </div>
      ) : (
        <Grid container spacing={2} style={{ marginLeft: "30px" }}>
          <h2>Data Not Found!</h2>
        </Grid>
      )}
    </Fragment>
  );
};
export default TableViewComponent;
