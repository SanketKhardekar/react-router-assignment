import { Fragment } from "react"
import { Grid, Card,CardContent } from "@mui/material";
const CardViewComponent=(props)=>{
    let userData = props.data.length > 0 ? (
        props.data.map((element) => {
          return (
            <Grid key={element.id} item lg={2} md={2} sm={6} xs={12} >
              <Card key={element.id} onClick={props.onClick}>
                <CardContent key={element.id}>
                  <h4>Name: {element.name}</h4>
                  <h4>Birth Date: {element.address}</h4>
                  <h4>College: {element.company}</h4>
                  <h4>Bio:{}</h4>
                </CardContent>
              </Card>
            </Grid>
          );
        })
      ) : (
        <h1>No Data Found</h1>
      );
    return(<Fragment>
        <Grid container spacing={2} style={{ marginLeft: "30px" }}>
        {userData}
      </Grid>
    </Fragment>)
}
export default CardViewComponent