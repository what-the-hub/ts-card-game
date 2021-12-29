/*let n: ReturnType<typeof setTimeout>
n = setTimeout(saySomething, 1000)

function saySomething(): void {
    console.log('Hello')
}*/
abstract class Card {
    protected constructor(protected cardSymbol: string) {
    }
    protected getSymbol(){
        console.log(this.cardSymbol)
    }
}


class EffectCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }
    setEffect() {
        console.log('random effect')
    }
}

class IncreaseCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }
    increasePoints() {
        console.log('increase effect')
    }
}

class DecreaseCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }
    decreasePoints() {
        console.log('decrease effect')
    }
}


let myCard1 = new IncreaseCard('a')

let myCard2 = new EffectCard('b')

let myCard3 = new DecreaseCard('c')


function getRandomSymbol (): string {
    const symbols: string[] = ['A', 'B', 'C'] //enum
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
    return randomSymbol
}


function getAllFuncs(toCheck: any) {
    const props = [];
    let obj = toCheck;
    do {
        props.push(...Object.getOwnPropertyNames(obj));
    } while (obj = Object.getPrototypeOf(obj));

    return props.sort().filter((e, i, arr) => {
        if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;
    });
}

getAllFuncs(myCard1)

/*let effectsMap = new Map<string, Function>()
effectsMap.set('increase', increase)
    .set('decrease', decrease)
    .set('call', call)*/
/*function getRandomEffect (): string {
    const randomEffect = effectsMap[Math.floor(Math.random() * effectsMap.size)]
    return randomEffect
}*/



console.log(getAllFuncs(myCard1))