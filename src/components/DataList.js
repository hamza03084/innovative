import { useEffect, useState, useCallback } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import ListHeader from "./ListHeader";
import ListFooter from "./ListFooter";
import Box from "@mui/material/Box";

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async (pageNum) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?_page=${pageNum}&_limit=10`
      );
      setData((prevData) => [...prevData, ...response.data]);
      setHasMore(response.data.length > 0); // If no more data, set hasMore to false
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(page);

    return () => {
      axios.CancelToken.source().cancel("Component unmounted");
    };
  }, [fetchData, page]);

  const handleScroll = (event) => {
    if (
      event.target.documentElement.scrollHeight -
        event.target.documentElement.scrollTop ===
        event.target.documentElement.clientHeight &&
      !loading &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <Box mt={5}>
      <ListHeader />
      <List>
        {data.map((item) => (
          <ListItem key={item.id} alignItems='flex-start'>
            <ListItemText
              primary={item.name}
              secondary={
                <>
                  <strong>Email:</strong> {item.email}
                  <br />
                  <strong>Comment:</strong> {item.body}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <ListFooter loading={loading} />
    </Box>
  );
};

export default DataList;
