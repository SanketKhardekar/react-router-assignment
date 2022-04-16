import { DataGrid } from "@mui/x-data-grid";

const TableViewComponent = (props) => {
  const onCellClickHandler = (params) => {
    console.log(params);
  };
  return (
    <div style={{width:"100%"}}>
      {props.rows.length > 0 ? (
        <DataGrid
          autoHeight={true}
          disableExtendRowFullWidth={true}
          rows={props.rows}
          columns={props.columns}
          pageSize={props.rows.length > 10 ? 5 : props.rows.length}
          onCellClick={props.user ? onCellClickHandler : ()=>{}}
        />
      ) : (
        <h2>Data Not Found!</h2>
      )}
    </div>
  );
};
export default TableViewComponent;
