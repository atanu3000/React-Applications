import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    // if (!user) return ;

    return (
        <div className="flex flex-col gap-4 p-5 border border-red-300 rounded-lg">
            {user ? (
                <>
                    <h2>Welcome, {user?.username}</h2>
                    <button className="bg-gray-300 rounded-lg py-2" onClick={() => setUser('')}>Logout</button>
                </>
            ) : (
                <div>Please Login</div>
            )}
        </div>
    );
};

export default Profile;
