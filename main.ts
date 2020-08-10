radio.onReceivedString(function (receivedString) {
    bericht = receivedString
    teller += 1
    if (teller == 2) {
        teller = 0
        printTekst = "" + printTekst + bericht
        serial.writeLine(printTekst)
        printTekst = ""
    } else if (teller == 1) {
        printTekst = "" + printTekst + bericht
    }
})
let printTekst = ""
let bericht = ""
let teller = 0
serial.redirect(
SerialPin.P1,
SerialPin.P8,
BaudRate.BaudRate19200
)
serial.writeLine("")
radio.setGroup(255)
teller = 0
bericht = ""
printTekst = ""
basic.forever(function () {
    led.toggle(2, 2)
    basic.pause(1000)
})
