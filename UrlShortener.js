import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { shortenUrl } from "../services/api";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);

  const handleSubmit = async () => {
    if (!url) return;
    const result = await shortenUrl(url);
    setShortUrl(result);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <TextField
        label="Enter URL"
        fullWidth
        margin="normal"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
      {shortUrl && <Typography variant="h6">Shortened URL: {shortUrl}</Typography>}
    </Container>
  );
}