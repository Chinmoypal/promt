const greetUser = () =>{
    let name = prompt("Please enter your name: chinmoy");
    
    if (!name) {
        name = "Guest";  // Default to "Guest" if no name is entered
    }
    
  alert(`Hello, ${name}!`);
 
};

// Invoke the function
greetUser();