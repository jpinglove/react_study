import React from "react";

function UserProfit(){
    const user ={
        name:"Jonathan",
        age:24,
        location:'zh',
    };

    return (
        <div>
            <h2>name: {user.name}</h2>
            <p>Age:{user.age}</p>
            <p>location:{user.location}</p>
        </div>
    );
}

export default UserProfit;
