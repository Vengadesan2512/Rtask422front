import React, { useState, useEffect } from 'react';

function UrlList() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/urls`);
    const data = await response.json();
    setUrls(data);
  };

  const handleDelete = async (id) => {
    await fetch(`${process.env.REACT_APP_API_URL}/api/urls/${id}`, {
      method: 'DELETE',
    });
    fetchUrls();
  };

  return (
    <div>
      <h2>Shortened URLs</h2>
      <ul>
        {urls.map((url) => (
          <li key={url._id}>
            <a href={url.shortUrl}>{url.shortUrl}</a> - {url.originalUrl}
            <button onClick={() => handleDelete(url._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UrlList;
