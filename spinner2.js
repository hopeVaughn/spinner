const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

const spinner2 = (arr) => {

  let delay = 100;

  for (const char of arr) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 200;
  }
};

spinner2(spinner);