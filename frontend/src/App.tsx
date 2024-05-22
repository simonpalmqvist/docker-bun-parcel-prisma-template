import { useEffect, useState } from "react";

export function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/api")
      .then(async (response) => response.json())
      .then(({ message }) => setMessage(message));
  }, []);

  return <h1>{message ?? "Loading..."}</h1>;
}
