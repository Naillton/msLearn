interface Message {
  text: string,
  sender: string
}

function displayMessage({text, sender}: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'Hello, world!'});