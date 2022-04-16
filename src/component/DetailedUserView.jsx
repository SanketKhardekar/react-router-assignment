import { Paper } from "@mui/material";
import styles from "./DetailedUserView.module.css";
const DetailedUserView = (props) => {
  return (
    <Paper className={styles.cardBox}>
      <div className={styles.cardPaper}>
        <div className={styles.cardText}>
          <strong>Name:</strong> {"Lucifer Morningstar"}
        </div>
        <div className={styles.cardText}>
          <strong>BrithDate:</strong> {"lucifer@gmail.com"}
        </div>
        <div className={styles.cardText}>
          <strong>Gender:</strong> {"1234567890"}
        </div>
        <div className={styles.cardText}>
          <strong>Address:</strong> {"1234567890"}
        </div>
        <div className={styles.cardText}>
          <strong>Country:</strong> {"1234567890"}
        </div>
        <div className={styles.cardText}>
          <strong>College:</strong> {"lucifer@gmail.com"}
        </div>
        <div className={styles.cardText}>
          <strong>Hobbies:</strong> {"1234567890"}
        </div>
        <div className={styles.cardText}>
          <div>
            <strong>Bio:</strong>
          </div>
          <div>
            {
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oppo"
            }
          </div>
        </div>
      </div>
    </Paper>
  );
};
export default DetailedUserView;
