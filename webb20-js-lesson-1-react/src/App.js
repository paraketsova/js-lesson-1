import React from 'react'
import Greeting from './components/Greeting'
import UserDataInfo from './components/UserDataInfo'



function App() {
  const greetingText = "Hej o hå!"
  const userData = {
    username: "mariiaParaketsova",
    firstName: "Mariia",
    lastName: "Paraketsova",
    yearOfBirth: 1974,
    location: "Sweden"
  }

  return (
    <div>
      <Greeting
        greeting={greetingText}
        firstName={userData.firstName}
    />
  <UserDataInfo userData={userData.username} />
  <UserDataInfo userData={userData.firstName} />
  <UserDataInfo userData={userData.lastName} />
  <UserDataInfo userData={userData.yearOfBirth} />
  <UserDataInfo userData={userData.location} />
  <UserDataInfo userData={userData.username} />

    </div>
  );
}

export default App;
