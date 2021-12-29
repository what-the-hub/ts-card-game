/*let n: ReturnType<typeof setTimeout>
n = setTimeout(saySomething, 1000)

function saySomething(): void {
    console.log('Hello')
}*/
class Points {
    score: number = 0
    increase(points: number){
        this.score += points
    }
    decrease(points: number){
        this.score -= points
    }
    getScore(){
        return this.score
    }
}

let score = new Points()

abstract class Card {
    protected constructor(protected cardSymbol: string) {
    }
    get symbol() {
        return this.cardSymbol
    }
    abstract effect(i:number): void
}

class EffectCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }
    effect(i:number) {
        this.callNext()
        //console.log(i)
        run('b')
        return 1
    }
    callNext () {

        console.log('random effect')
    }
}

class IncreaseCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }
    effect(i:number) {
        //console.log(i)
        this.increasePoints()
    }
    increasePoints () {
        score.increase(20)
        console.log('increase effect')
        console.log(score.getScore())

    }
}

class DecreaseCard extends Card {
    constructor(protected cardSymbol: string) {
        super(cardSymbol);
    }
    effect(i:number) {
        //console.log(i)
        this.decreasePoints()
        //console.log('decrease effect')
    }
    decreasePoints() {

        console.log('decrease effect')
        score.decrease(120)
        console.log(score.getScore())
    }
}



let myArr = [new IncreaseCard('a'), new DecreaseCard('b'), new EffectCard('c')]
//let classes: any[] = []

let classes: any[] = []

for (let i = 0; i<6; i++){
    classes.push(myArr[Math.floor(Math.random() * myArr.length)])
}


let tempClasses = classes

/*let myCard1 = new IncreaseCard('a')
let myCard2 = new EffectCard('b')
let myCard3 = new DecreaseCard('c')*/
/*function getRandomSymbol (): string {
    const symbols: string[] = ['A', 'B', 'C'] //enum
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
    return randomSymbol
}*/
/*function getAllFuncs(toCheck: any) {
    const props = [];
    let obj = toCheck;
    do {
        props.push(...Object.getOwnPropertyNames(obj));
    } while (obj = Object.getPrototypeOf(obj));

    return props.sort().filter((e, i, arr) => {
        if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;
    });
}*/
/*let effectsMap = new Map<string, Function>()
effectsMap.set('increase', increase)
    .set('decrease', decrease)
    .set('call', call)*/
/*function getRandomEffect (): string {
    const randomEffect = effectsMap[Math.floor(Math.random() * effectsMap.size)]
    return randomEffect
}*/

let enteredSymbol = 'c'
function run (symbol:string) {
    for (let i = 0; i<classes.length; i++){
        //console.log(classes[i].symbol)
        if (classes[i].symbol === symbol){
            //console.log(classes[i])
            classes[i].effect(i)
            tempClasses = tempClasses.filter(el => el != classes[i])
        }
        /*    classes[i].effect(i)
            if (classes[i].effect(i) === 1){
                console.log(';;;;')
            }*/
    }
}

run(enteredSymbol)
console.log(tempClasses)
