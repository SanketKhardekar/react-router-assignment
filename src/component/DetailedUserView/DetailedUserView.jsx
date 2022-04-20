import { Button, Paper } from "@mui/material";
import styles from "./DetailedUserView.module.css";
const DetailedUserView = (props) => {
  const { user } = props;
  let hobbiesArray = [];
  user.hobbies.forEach((element) => {
    hobbiesArray.push(element.value);
  });
  const actionsHandler=(actionName)=>{
    if(actionName === 'delete')
    {
      if(window.confirm('Want To Delete This User?'))
      {
        props.onDelete(user.id)
      }
    }
    else
    {
      props.onUpdate(user);
    }
  }
  return (
    <Paper elevation={10} className={styles.cardBox}>
      <div className={styles.cardPaper}>
        <div className={styles.cardText}>
          <strong>Name:</strong> {user.name}
        </div>
        <div className={styles.cardText}>
          <strong>Brith Date:</strong> {user.birthDate}
        </div>
        <div className={styles.cardText}>
          <strong>Gender:</strong> {user.gender}
        </div>
        <div className={styles.cardText}>
          <strong>Address:</strong> {user.address}
        </div>
        <div className={styles.cardText}>
          <strong>Country:</strong> {user.country}
        </div>
        <div className={styles.cardText}>
          <strong>College:</strong> {user.college}
        </div>
        <div className={styles.cardText}>
          <strong>Hobbies:</strong> {hobbiesArray.toString()}
        </div>
        <div className={styles.cardText}>
          <div>
            <strong>Bio:</strong>
          </div>
          <div>{user.longBio}</div>
        </div>
        <div className={styles.actions}>
          <Button
            onClick={actionsHandler.bind(this,"update")}
            variant="contained"
            color="success"
            size="large"
          >Update</Button>
          <Button
            onClick={actionsHandler.bind(this,"delete")}
            variant="contained" 
            color="error"
            size="large"
          >Delete</Button>
        </div>
      </div>
    </Paper>
  );
};
export default DetailedUserView;
