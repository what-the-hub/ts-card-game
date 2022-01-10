import {Card, DecreaseCard, EffectCard, IncreaseCard} from "./CardsClasses";
import {Symbols} from "./types";

class Points {
    private score: number = 0
    private points: number = this.getPoints()

    increase() {
        this.points = this.getPoints()
        this.score += this.points
    }

    decrease() {
        this.points = this.getPoints()
        this.score -= this.points
    }

    getPoints(): number {
        const min = 1
        const max = 10

        return Math.floor(Math.random() * (max - min) + min)
    }

    get currentScore() {
        return this.score
    }

    get currentPoints() {
        return this.points
    }
}

class Game {
    private cards: Card[]
    public score: Points

    constructor(score: Points) {
        this.score = score
        this.cards = this.getDeck()
    }

    private checkActiveCards(currentSymbol: string): Card[] {
        let activeCards: Card[] = []
        this.cards = this.cards.filter((el: Card) => {
            if (el.symbol !== currentSymbol) {
                return el
            } else {
                activeCards.push(el)
            }
        })

        return activeCards || null
    }

    public run(symbol: string) {
        if (this.cards) {
            console.log(this.cards)
        }

        const activeCards = this.checkActiveCards(symbol)
        if (activeCards) {
            activeCards.forEach((el) => {
                el.effect()
            })
        }

        console.log('----------')
        return `TOTAL SCORE: ${this.score.currentScore}`
    }

    public getRandomSymbol(): string {
        return Symbols[Math.floor(Math.random() * 3)]
    }

    private getRandomCard(): Card {
        const cards: Card[] = [
            new IncreaseCard(this.getRandomSymbol()),
            new DecreaseCard(this.getRandomSymbol()),
            new EffectCard(this.getRandomSymbol()),
        ]

        return cards[Math.floor(Math.random() * cards.length)]
    }

    private getDeck(): Card[] {
        const min = 6
        const max = 10
        const cards: Card[] = []
        const cardsCounter: number = Math.floor(Math.random() * (max - min) + min)
        for (let i = 0; i < cardsCounter; i++) {
            cards.push(this.getRandomCard())
        }

        return cards
    }
}


export const game = new Game(new Points())
