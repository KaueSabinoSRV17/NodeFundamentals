const THREE_SECONDS = 3 * 1000
const HALF_A_SECOND = 1 * 1000 / 2

const loadingInterval = setInterval(() => {
    let loadingBar = ''

    process.stdout.write(`${loadingBar += '#'}`)
}, HALF_A_SECOND)

setTimeout(() => {
    clearInterval(loadingInterval) 
    console.log('LOADED!!!')
}, THREE_SECONDS)