import {Card, DecreaseCard, EffectCard, IncreaseCard} from "./CardsClasses";

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
    public myScore: number // review

    constructor(score: Points) {
        this.myScore = score.currentScore

        this.cards = this.getDeck(6, 10)
    }

    public run(symbol: string) {
        if (this.cards) {
            console.log(this.cards)
        }

        symbol = symbol.toUpperCase()
        let activeCads: Card[] = []
        this.cards = this.cards.filter((el: Card) => {
            if (el.symbol !== symbol) {
                return el
            } else {
                activeCads.push(el)
            }
        })

        if (activeCads) {
            activeCads.forEach((el) => {
                el.effect()
            })
        }

        console.log('----------')
        return `TOTAL SCORE: ${score.currentScore}`
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

    private getDeck(min: number, max: number): Card[] {
        const cards: Card[] = []
        const cardsCounter: number = Math.floor(Math.random() * (max - min) + min)
        for (let i = 0; i < cardsCounter; i++) {
            cards.push(this.getRandomCard())
        }
        return cards
    }

}

export let score = new Points()

export const game = new Game(score)

// екземпляр передать