// Get the password input element
const passwordBox = document.getElementById("password");

// Define the password length
const length = 12;

// Define character sets
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}:[]<>?";

// Combine all character sets
const allChars = upperCase + lowerCase + numbers + symbols;

/**
 * Generate a random password and fill the password input element
 */
const createPassword = () => {
  let password = "";

  // Ensure password includes at least one character from each set
  password += getRandomChar(upperCase);
  password += getRandomChar(lowerCase);
  password += getRandomChar(numbers);
  password += getRandomChar(symbols);

  // Fill the rest of the password length with random characters from all sets
  while (password.length < length) {
    password += getRandomChar(allChars);
  }

  passwordBox.value = password;
};

/**
 * Copy the password to the clipboard
 */
const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
};

// Helper function to get a random character from a string
const getRandomChar = (str) => {
  return str[Math.floor(Math.random() * str.length)];
};
