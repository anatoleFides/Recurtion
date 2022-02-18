function writeLetter (message) {
  setTimeout(() => console.log(message.slice(0, 1)), 1000)

  message.length - 1 > 0 && setTimeout(() =>  writeLetter(message.slice(1)), 1000)
}

writeLetter('welcome!')