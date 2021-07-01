import React, { useState } from "react";
import Profile from './Components/Profile'

let App = () => {
  let [username, setUsername] = useState("");
  let [message, setMessage] = useState("");
  let [chirps, setChirps] = useState([
    { username: "Donald Duck", message: "Where is Daisy?" },
    { username: "Darkwing Duck", message: "I got no time for crime!" },
    { username: "Daffy Duck", message: "Sufferin Succotash!!" },
  ]);
  
  let handleSubmit= (e) => {
      e.preventDefault();
      let newchirp = {
          username: username,
          message: message
        };

        setChirps([...chirps, newchirp]);
  };

  return (
    <>
      <div className="container make-chirps">
        <form
          className="bg-primary m-3 py-4 rounded shadow d-flex justify-content-center make-chirps">
          <input className="p1" type="text" placeholder="Who are you?" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input
            className="p1"
            type="text"
            placeholder="What are you thinking about..." value={message} onChange={(e) => setMessage(e.target.value)}
          />
          <input className="p1" type="submit" value="Post Chirp!" onClick={() => handleSubmit(e)}/>
        </form>
      </div>
      {chirps.map((chirp, id) => <Profile chirp={chirp } />)}
    </>
  );
};

export default App;
