const EventEmitter = require("events")
const sendVerification = require("./send-varification-email")
const sendWelcome = require("./send-welcome-email")


const eventEmitter= new EventEmitter();


const userResitered = () => {
    eventEmitter.on("userRegistered", sendVerification)
    eventEmitter.on("userRegistered", sendWelcome)

    eventEmitter.emit("userRegistered")
}
userResitered()











// eventEmitter.on("name called" , function () {
//     console.log("Listener 1");
// })

// eventEmitter.on("name called" , function () {
//     console.log("Listener 2");
// })

// eventEmitter.emit("name called")