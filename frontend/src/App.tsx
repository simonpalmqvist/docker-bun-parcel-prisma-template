import { useEffect, useState } from "react";
import { client } from "./api";

export function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    client("/message", {}).then(({ data }) => data && setMessage(data.message));

    // fetch("/api/users", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ username: "Simon" }),
    // });

    client("/users", { method: "GET" })
      .then(({ data }) => data)
      .then(console.log);
  }, []);

  return <h1>{message ?? "Loading..."}</h1>;
}
