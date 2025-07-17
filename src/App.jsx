import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import Loader from "./components/Loader";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          {users.map((user) => (
            <div key={user.id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
