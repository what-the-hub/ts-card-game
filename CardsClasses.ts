import {score, game} from "./GameClasses";

export abstract class Card {
    protected constructor(protected cardSymbol: string) {}

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

    private callNext() {
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

    private increasePoints() {
        score.increase()
        console.log(`|${this.symbol}| card INCREASED ${score.currentPoints} points`)
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

    private decreasePoints() {
        score.decrease()
        console.log(`|${this.symbol}| card DECREASED ${score.currentPoints} points`)
        console.log(`Total score: ${score.currentScore}`)
    }
}