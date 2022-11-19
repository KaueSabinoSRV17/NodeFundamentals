const THREE_SECONDS = 3 * 1000

setTimeout(() => {
    const timeInSeconds = THREE_SECONDS / 1000
    const message = `this message appears in ${timeInSeconds} seconds`

   console.log(message) 
}, THREE_SECONDS)