const { EventEmitter } = require('events')

class Character extends EventEmitter {
    constructor(name) {
        this.name = name
    }
}

const batman = new Character('Bruce Wayne')
