import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ListFooter = ({ loading }) => {
  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>
      {loading && <CircularProgress />}
    </Box>
  );
};

export default ListFooter;
