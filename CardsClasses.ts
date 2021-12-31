import {score, game} from "./GameClass";




export abstract class Card {
    protected constructor(protected cardSymbol: string) {
    }

    get symbol() {
        return this.cardSymbol
    }

    abstract effect(): void
}
export class EffectCard extends Card {
    private arr: string[] = ['c', 'a']
    private i: number = 0
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }

    effect() {
        this.callNext()
        //console.log(i)
    }

    callNext() {
        console.log(`${this.symbol} card has CALL EFFECT`)
        game.run(this.arr[this.i])
        this.i +=1
        console.log(this.i, 'iiii')
    }
}

export class IncreaseCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }

    effect() {
        //console.log(i)
        this.increasePoints()
    }

    increasePoints() {
        score.increase(20)
        console.log(`${this.symbol} card has INCREASE EFFECT`)
        console.log(score.currentScore)

    }
}

export class DecreaseCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }

    effect() {
        //console.log(i)
        this.decreasePoints()
        //console.log('decrease effect')
    }

    decreasePoints() {

        console.log(`${this.symbol} card has DECREASE EFFECT`)
        score.decrease(120)
        console.log(score.currentScore)
    }
}