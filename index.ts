let n: ReturnType<typeof setTimeout>
n = setTimeout(saySomething, 1000)

function saySomething(): void {
    console.log('Hello')
}
