IR.IR_callbackUser(function (message) {
    if (message == 6) {
        basic.clearScreen()
        basic.showString("off")
        apagar = 1
        basic.clearScreen()
        maqueen.motorStop(maqueen.Motors.All)
        item.clear()
    }
    if (message == 7) {
        basic.clearScreen()
        basic.showString("on")
        apagar = 0
    }
    if (apagar == 0) {
        if (message == 5) {
        	
        }
        if (message == 6) {
        	
        }
        if (message == 9) {
            mode += 1
        }
        if (message == 10) {
            mode += -1
        }
        if (mode == 1) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (mode == 2) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
            basic.showIcon(IconNames.Heart)
        }
        if (mode == 3) {
            basic.showIcon(IconNames.Happy)
            basic.showIcon(IconNames.Sad)
            basic.showIcon(IconNames.Confused)
            basic.showIcon(IconNames.Angry)
            basic.showIcon(IconNames.Asleep)
            basic.showIcon(IconNames.Surprised)
            basic.showIcon(IconNames.Silly)
        }
        if (message == 8) {
            cancion += 1
        }
        if (message == 11) {
            cancion += -1
        }
        if (cancion == 1) {
            music.playTone(220, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Double))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Double))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Double))
            music.playTone(220, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Double))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Double))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
        }
        if (message == 21) {
            item.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        if (message == 20) {
            item.showColor(neopixel.colors(NeoPixelColors.Green))
        }
        if (message == 22) {
            item.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
        if (message == 26) {
            item.showColor(neopixel.colors(NeoPixelColors.Purple))
        }
        if (message == 25) {
            item.showColor(neopixel.colors(NeoPixelColors.Yellow))
        }
        if (message == 24) {
            item.showColor(neopixel.colors(NeoPixelColors.Indigo))
        }
        if (message == 17) {
            item.showColor(neopixel.colors(NeoPixelColors.Orange))
        }
        if (message == 16) {
            item.showColor(neopixel.colors(NeoPixelColors.White))
        }
        if (message == 18) {
            item.showColor(neopixel.colors(NeoPixelColors.Black))
        }
        if (message == 15) {
            rojo = 0
            azul = 0
            verde = 255
            for (let index = 0; index < 500; index++) {
                rojo += 1
                azul += -1
                item.showColor(neopixel.rgb(rojo, verde, azul))
                basic.pause(1)
            }
            for (let index = 0; index < 500; index++) {
                verde += 1
                rojo += -1
                item.showColor(neopixel.rgb(rojo, verde, azul))
                basic.pause(1)
            }
            for (let index = 0; index < 500; index++) {
                azul += 1
                verde += -1
                item.showColor(neopixel.rgb(rojo, verde, azul))
                basic.pause(1)
            }
        }
        if (message == 23) {
            azul = 0
            verde = 255
            rojo = 0
            for (let index = 0; index < 500; index++) {
                rojo += randint(0, 10)
                azul += randint(0, 10)
                item.showColor(neopixel.rgb(rojo, verde, azul))
                item.rotate(1)
                basic.pause(1)
            }
            for (let index = 0; index < 500; index++) {
                rojo += randint(0, 10)
                verde += randint(0, 10)
                item.showColor(neopixel.rgb(rojo, verde, azul))
                item.rotate(1)
                basic.pause(1)
            }
            for (let index = 0; index < 500; index++) {
                verde += randint(0, 10)
                azul += randint(0, 10)
                item.showColor(neopixel.rgb(rojo, verde, azul))
                item.rotate(1)
                basic.pause(1)
            }
        }
        if (message == 27) {
            verde = 255
            rojo = 0
            azul = 0
            for (let index = 0; index < 500; index++) {
                rojo += randint(0, -10)
                azul += randint(0, 10)
                item.showColor(neopixel.rgb(rojo, verde, azul))
                basic.pause(1)
                item.rotate(1)
            }
            for (let index = 0; index < 500; index++) {
                rojo += randint(0, 10)
                verde += randint(0, -10)
                item.showColor(neopixel.rgb(rojo, verde, azul))
                item.rotate(1)
                basic.pause(1)
            }
            for (let index = 0; index < 500; index++) {
                verde += randint(0, 10)
                azul += randint(0, -10)
                item.showColor(neopixel.rgb(rojo, verde, azul))
                item.rotate(1)
                basic.pause(1)
            }
        }
        if (message == 19) {
            rojo = 0
            azul = 0
            verde = 255
            for (let index = 0; index < 500; index++) {
                rojo += 4
                azul += -1
                item.showColor(neopixel.rgb(rojo, verde, azul))
                item.rotate(1)
                basic.pause(1)
            }
            for (let index = 0; index < 500; index++) {
                rojo += -1
                verde += 10
                item.showColor(neopixel.rgb(rojo, verde, azul))
                item.rotate(1)
                basic.pause(1)
            }
            for (let index = 0; index < 500; index++) {
                verde += -2
                azul += 10
                item.showColor(neopixel.rgb(rojo, verde, azul))
                item.rotate(1)
                basic.pause(1)
            }
        }
    }
})
let cancion = 0
let mode = 0
let azul = 0
let verde = 0
let rojo = 0
let item: neopixel.Strip = null
let apagar = 0
apagar = 0
item = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
rojo = 0
verde = 255
azul = 0
mode = 0
apagar = 1
cancion = 0
basic.forever(function () {
    if (apagar == 0) {
        basic.showLeds(`
            # # # . .
            # . . . #
            # # . . #
            # . . . #
            # . # # .
            `)
    }
})
