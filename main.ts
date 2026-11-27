input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 7))
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
