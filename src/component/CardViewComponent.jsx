import { Fragment } from "react"
import { Grid, Card,CardContent } from "@mui/material";
const CardViewComponent=(props)=>{
    let userData = props.data.length > 0 ? (
        props.data.map((element) => {
          const onCardClickHandler=()=>{
            props.onClick(element.id)
          }
          return (
            <Grid key={element.id} item lg={2} md={2} sm={6} xs={10} >
              <Card key={element.id} onClick={onCardClickHandler} elevation={3}>
                <CardContent key={element.id}>
                  <h4><strong>Name:</strong> {element.name}</h4>
                  <h4><strong>Birth Date:</strong> {element.birthDate}</h4>
                  <h4><strong>College:</strong> {element.college}</h4>
                  <h4><strong>Bio:</strong> {element.shortBio}</h4>
                </CardContent>
              </Card>
            </Grid>
          );
        })
      ) : (
        <h2>Data Not Found!</h2>
      );
    return(<Fragment>
        <Grid container spacing={2} style={{ marginLeft: "30px" }}>
        {userData}
      </Grid>
    </Fragment>)
}
export default CardViewComponent