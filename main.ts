input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . . . .
        # # # # .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.No)
    music.stopAllSounds()
    soundExpression.sad.playUntilDone()
})
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
    soundExpression.hello.playUntilDone()
    basic.showString("Hello!")
    music.stopAllSounds()
    soundExpression.hello.playUntilDone()
    music.stopAllSounds()
    soundExpression.hello.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . #
        . # # # #
        . . . . #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Yes)
    music.stopAllSounds()
    soundExpression.happy.playUntilDone()
})
basic.showString("Find east and click \"A,B or A+B\"")
