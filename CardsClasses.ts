import {score, game} from "./GameClasses";

export abstract class Card {
    protected constructor(protected cardSymbol: string) {
        this.cardSymbol = cardSymbol.toLowerCase()
    }

    get symbol() {
        return this.cardSymbol
    }

    abstract effect(): void
}

export class EffectCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }

    effect() {
        this.callNext()
    }

    callNext() {
        const check = (receivedSymb: string) => {
            if (receivedSymb !== this.symbol){
                console.log(`|${this.symbol}| CALL ${receivedSymb} card`)
                game.run(receivedSymb)
            }
            else check(game.getRandomSymbol())
        }
        check(game.getRandomSymbol())
    }
}

export class IncreaseCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }

    effect() {
        this.increasePoints()
    }

    increasePoints() {
        const points = game.getPoints(1,10)
        score.increase(points)
        console.log(`|${this.symbol}| card INCREASED ${points} points`)
        console.log(`Total score: ${score.currentScore}`)
    }
}

export class DecreaseCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }

    effect() {
        this.decreasePoints()
    }

    decreasePoints() {
        const points = game.getPoints(1,10)
        score.decrease(points)
        console.log(`|${this.symbol}| card DECREASED ${points} points`)
        console.log(`Total score: ${score.currentScore}`)
    }
}