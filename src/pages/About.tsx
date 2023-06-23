import React, { useEffect, useState } from 'react';

interface ApiResponse {
  message: string;
}

export function About() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/data');
      const responseData: ApiResponse = await response.json();
      setMessage(prevMessage => prevMessage + responseData.message);
    } catch (error) {
      console.error(error);
    }
  };

  return <div>About: {message}</div>;
}
