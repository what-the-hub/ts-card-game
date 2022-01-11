### Card game manager script
#### with OOP approach

User can input one of three symbols (```A```, ```B``` or ```C```). After that random cards deck is generated. All the cards, marked with the same symbol, as the one entered, play their effects (it may include playing other cards). After that history of card and total score displays in terminal.

Details:
General algorithm is:
1. User enters the symbol (```A```, ```B``` or ```C```). No other symbol is allowed.
2. Random card deck is being generated. There are 6-10 cards (random amount in that range.) Each card has ```symbol``` and ```effect``` on them. ```symbol``` is defined by that domain: [```A```, ```B```, ```C```].

```effect``` is of those:
1. \+ [1 - 10] (random) points to the score
2. \- [1- 10] (random) points from the score
3. play cards with other symbol (single one)

Only cards with a **symbol**, which user has entered, play their **effects**. **But some of this effects can trigger another symbol**, which will make cards with this symbol play next.


***
### How to check this task
for enabling directly execute TypeScript on Node.js without precompiling

`npm install -g ts-node typescript '@types/node'`

after install you can run
`...$ ts-node index.ts ` and get result into terminal