import React from 'react'

function Greeting({greeting, firstName, yearOfBirth,  usersSex}) {
  //const { greeting, firstName } = props // Deconstructing
  const age = (new Date().getFullYear()) - yearOfBirth;
  const sex = usersSex;
  let name = firstName;
  
  console.log(yearOfBirth);

  console.log(age, sex, firstName);
  let ageSpecificGreeting = "";

 if (age > 18) {
    ageSpecificGreeting = greeting;
  } else {
    ageSpecificGreeting = greeting.replace("Hello", "Hi")
  }  
  
  if (sex === "woman") {
    name = (firstName + " darling");
  } else {
    name = firstName;
  }
  
  return (
    <h1>{ageSpecificGreeting} {name}</h1>
  )
}

export default Greeting;