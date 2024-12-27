const randomPassword = (length = 5) => {
    const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += char[Math.floor(Math.random() * char.length)];
    }
    return password;
  };
  
  module.exports = randomPassword;
      