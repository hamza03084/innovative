import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const ListHeader = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6'>My Data List</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ListHeader;
