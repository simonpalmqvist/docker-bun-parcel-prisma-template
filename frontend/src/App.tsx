import { useEffect, useState } from "react";

export function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then(({ message }) => setMessage(message));

    // fetch("/api/users", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ username: "Simon" }),
    // });

    fetch("/api/users")
      .then((response) => response.json())
      .then(console.log);
  }, []);

  return <h1>{message ?? "Loading..."}</h1>;
}
