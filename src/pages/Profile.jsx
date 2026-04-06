import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
    const user = useContext(UserContext);

    return <h2>Hello, {user}</h2>;
}

export default Profile;