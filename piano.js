// Define the key-to-audio mapping
const keyMappings = {
    '0': 'key1.mp3',
    '1': 'key2.mp3',
    '2': 'key3.mp3',
    '3': 'key4.mp3',
    '4': 'key5.mp3',
    '5': 'key6.mp3',
    '6': 'key7.mp3',
    '7': 'key8.mp3',
    '8': 'key9.mp3',
    '9': 'key10.mp3',
    '-': 'key11.mp3'
  };
  
  // Define an array of key elements
  const keys = Array.from(document.querySelectorAll('.key'));
  
  // Play sound function
  function playSound(key) {
    const audioFile = keyMappings[key];
    if (audioFile) {
      const sound = new Audio(`sounds/${audioFile}`);
      sound.play();
    }
  }
  
  // Function to handle keydown event
  function handleKeyDown(event) {
    const key = event.key;
    if (key in keyMappings) {
      playSound(key);
      keys[key].classList.add('active');
    }
  }
  
  // Function to handle keyup event
  function handleKeyUp(event) {
    const key = event.key;
    if (key in keyMappings) {
      keys[key].classList.remove('active');
    }
  }
  
  // Attach event listeners
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
  