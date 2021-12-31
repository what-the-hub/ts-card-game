import {Card, DecreaseCard, EffectCard, IncreaseCard} from "./CardsClasses";

export class Points {
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


export class Game {
    cards: Card[]

    constructor() {
        this.cards = this.getDeck(6, 10)
    }
// интерфейс для эффектов

    run(symbol: string) {
        console.log(this.cards)
        let activeCads: Card[] = []
        this.cards = this.cards.filter((el: Card) => {
            if (el.symbol !== symbol) {
                return el
            } else {
                activeCads.push(el)
            }
        })
        console.log(this.cards, 'old')
        console.log(activeCads, 'new')
        activeCads.forEach((el: any) => el.effect())
    }
    private getRandomSymbol(): string {
        enum Symbols{
            'A' = 0,
            'B' = 1,
            'C' = 2
        }
        return Symbols[Math.floor(Math.random()*3)]
    }
    private getRandomCard(): Card {
        const cards: Card[] = [
            new IncreaseCard(this.getRandomSymbol()),
            new DecreaseCard(this.getRandomSymbol()),
            new EffectCard(this.getRandomSymbol()),
        ]
        return cards[Math.floor(Math.random()*cards.length)]
    }
    getDeck(min: number, max: number): Card[] {
        const cards: Card[] = []
        let cardsCounter: number = Math.floor(Math.random()*(max-min) + min)
        for (let i = 0; i<cardsCounter; i++){
            cards.push(this.getRandomCard())
        }
        return cards
    }
}

export const game = new Game()
export let score = new Points()