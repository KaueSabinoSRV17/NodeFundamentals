const { EventEmitter } = require('events')

class Character extends EventEmitter {
    constructor(name) {
        super()
        this.name = name
    }
}

const batman = new Character('Bruce Wayne')

batman.on('batsignal', message => console.log(message))
batman.on('knightfall', () => console.log(`My true name is ${batman.name}`))

const RIP_KEVIN_CONROY = 'I AM THE DARKNESS, I AM THE NIGHT! I, AM BATMAN!'

batman.emit('batsignal', RIP_KEVIN_CONROY)
batman.emit('knightfall')
