import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const pages = [
  {
    id: 1,
    name: "UserList",
    to: "/",
  },
  {
    id: 2,
    name: "Add User",
    to: "/addUser",
  },
  {
    id:3,
    name:"College",
    to:"/collegeList"
  }
];
const AppbarComponent = () => {
  let navigate = useNavigate();
  return (
    <AppBar position="static" style={{backgroundColor:'#8100ff'}}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <strong>MindBowser</strong>
          </Typography>
          <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => navigate(page.to, { replace: true })}
                sx={{ my: 2, color:"whitesmoke", display: "block" }}
              >
               <strong>{page.name}</strong> 
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppbarComponent;
