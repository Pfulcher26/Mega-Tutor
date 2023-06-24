import { useEffect, useState } from 'react';

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
      const response = await fetch('http://localhost:5001/api/appointments');
      const responseData: ApiResponse = await response.json();
      setMessage(prevMessage => responseData.message);
    } catch (error) {
      console.error(error);
    }
  };

  return <div>About: {message}</div>;
}
