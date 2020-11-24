import React from 'react'
import Greeting from './components/Greeting'
import UserDataInfo from './components/UserDataInfo'



function App() {
  const greetingText = "Hello"
  const userData = {
    username: "mariiaParaketsova",
    firstName: "Mariia",
    lastName: "Paraketsova",
    yearOfBirth: 1974,
    location: "Sweden",
    usersSex: "woman"
  }

  const artists = [
    "Tools",
    "Tori Amos",
    "Pixies",
    "Dead Can Dance",
    "Cowboy Junkies",
    "Rolling Stones"
  ]

  return (
    <div>
      <Greeting
        greeting={greetingText}
        firstName={userData.firstName}
        yearOfBirth={userData.yearOfBirth}
        usersSex={userData.usersSex}
    />
  <UserDataInfo userData={userData.username} />
  <UserDataInfo userData={userData.firstName} />
  <UserDataInfo userData={userData.lastName} />
  <UserDataInfo userData={userData.yearOfBirth} />
  <UserDataInfo userData={userData.location} />
  <UserDataInfo userData={userData.sex} />

  <h2>My Favorite Artists</h2>
  <ul>
    {artists.map((item, index) => {
      return <li key={index}>{item}</li>
    })}
  </ul>

    </div>
  );
}

export default App;
