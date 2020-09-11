import React from 'react';

const User = ({user}) =>{
    return(
    <div>
        <strong>Nome: {user.name}</strong> <br/>
        <strong>E-mail: {user.email}</strong> <br/><br/>
    </div>
    );
};

export default User;