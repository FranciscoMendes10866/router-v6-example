import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/Auth";

const Lounge = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logout = useCallback(
    (e) => {
      e.preventDefault();
      setUser(null);
      navigate("/");
    },
    [setUser]
  );

  return (
    <div>
      <h1>Lounge page</h1>
      <p>
        Hello <strong>{user?.username}</strong>!
      </p>
      <p>Looks like you have access to this private route!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Lounge;
