let raceNumber = Math.floor(Math.random() * 1000);

  let registrationTime = false;

    let runnerAge = 18;
      if (runnerAge >= 18 && registrationTime) {
        raceNumber +=1000
};
  if (runnerAge >= 18 && registrationTime) {
    raceNumber +=1000
    console.log(`You will race at 9:30am. Your race number is ${raceNumber}.`)
  }
  else if (runnerAge >= 18 && !registrationTime) { raceNumber +=1000
    console.log(`You will race at 11:00am. Your race number is ${raceNumber}.`)
  }
  else if (runnerAge < 18) { raceNumber +=1000
    console.log(`You will race at 12:30am. Your race number is ${raceNumber}.`)
  }
  else {
    console.log('Go to the registration desk')
  };
