input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 A B G A F G E ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature()))
})
basic.setLedColor(basic.rgbw(
100,
100,
100,
0
))
basic.pause(5000)
basic.turnRgbLedOff()
basic.forever(function () {
	
})
