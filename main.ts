function étape_0 (id: number, message: string) {
    if (true) {
    	
    }
}
radio.onReceivedString(function (receivedString) {
    Parcours.onReceiveString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Parcours.printUser()
})
radio.setTransmitSerialNumber(true)
radio.setGroup(1)
Parcours.setName("Loup")
Parcours.setRadioAction(0, function (id, message) {
    étape_0(1, "abc")
})
basic.forever(function () {
	
})
