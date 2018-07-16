function attributesToPhrase(array) { 
  return arrary.map(driver => `${driver.name} is from ${driver.hometown}`);
}




function matchName(array, string) { 
  return array.filter(name => name.name === string);