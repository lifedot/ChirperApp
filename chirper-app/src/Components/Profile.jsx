import React from 'react';

const Profile = ({chirp}) => {
    return (
        <>
            <div className="d-flex flex-column text-center justify-content-center bg-secondary rounded shadow p-2 m-3">
                <p>{chirp.username}</p>
                <h2>{chirp.message}</h2>

            </div>


        </>
    );
}

export default Profile;