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
    name:"College List",
    to:"/collegeList"
  }
];
const AppbarComponent = () => {
  let navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            MindBowser
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => navigate(page.to, { replace: true })}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppbarComponent;
