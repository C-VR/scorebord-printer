radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
radio.setGroup(255)
serial.redirect(
SerialPin.P8,
SerialPin.P1,
BaudRate.BaudRate19200
)
serial.writeLine("")
