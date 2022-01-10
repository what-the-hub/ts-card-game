import {game} from "./GameClasses";

export abstract class Card {
    protected constructor(protected cardSymbol: string) {
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
        this.callNextAvailableCard()
    }

    private callNextAvailableCard(): void {
        const randomSymbol = game.getRandomSymbol()
        if (randomSymbol !== this.symbol) {
            console.log(`|${this.symbol}| CALL ${randomSymbol} card`)
            game.run(randomSymbol)
        } else this.callNextAvailableCard()
    }
}

export class IncreaseCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }

    effect() {
        this.increasePoints()
    }

    private increasePoints(): void {
        game.score.increase()
        console.log(`|${this.symbol}| card INCREASED ${game.score.currentPoints} points`)
        console.log(`Total score: ${game.score.currentScore}`)
    }
}

export class DecreaseCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }

    effect() {
        this.decreasePoints()
    }

    private decreasePoints(): void {
        game.score.decrease()
        console.log(`|${this.symbol}| card DECREASED ${game.score.currentPoints} points`)
        console.log(`Total score: ${game.score.currentScore}`)
    }
}
