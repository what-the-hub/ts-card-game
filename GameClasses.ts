import {Card, DecreaseCard, EffectCard, IncreaseCard} from "./CardsClasses";

class Points {
    score: number = 0

    increase(points: number) {
        this.score += points
    }

    decrease(points: number) {
        this.score -= points
    }

    get currentScore() {
        return this.score
    }
}

class Game {
    cards: Card[]
    constructor() {
        this.cards = this.getDeck(6, 10)
    }

    run(symbol: string) {
        if (this.cards) console.log(this.cards)

        let activeCads: Card[] = []
        this.cards = this.cards.filter((el: Card) => {
            if (el.symbol !== symbol) {
                return el
            } else {
                activeCads.push(el)
            }
        })

        activeCads.forEach((el) => {
            el.effect()
        })
        console.log('----------')
        return `TOTAL SCORE: ${score.score}`
    }

    public getRandomSymbol(): string {
        enum Symbols {
            'A' = 0,
            'B' = 1,
            'C' = 2
        }

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

    getDeck(min: number, max: number): Card[] {
        const cards: Card[] = []
        let cardsCounter: number = Math.floor(Math.random() * (max - min) + min)
        for (let i = 0; i < cardsCounter; i++) {
            cards.push(this.getRandomCard())
        }
        return cards
    }

    getPoints(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min)
    }
}

export const game = new Game()
export let score = new Points()