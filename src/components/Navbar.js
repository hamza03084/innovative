import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>Innovative Tech</Typography>
        <Button color='inherit' component={Link} to='/'>
          Home
        </Button>
        <Button color='inherit' component={Link} to='/data-list'>
          Data List Page
        </Button>
        <Button color='inherit' component={Link} to='/user-management'>
          Redux Curd
        </Button>
        <Button color='inherit' component={Link} to='/multi-step'>
          Multi Step
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
