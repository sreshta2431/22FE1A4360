import React, { useEffect, useState } from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";
import { getStats } from "../services/api";

export default function Statistics() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    setStats(getStats());
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Statistics</Typography>
      <List>
        {stats.map((s, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={s.short}
              secondary={`Original: ${s.original}, Clicks: ${s.clicks}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}