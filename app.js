const { randomMessageFactory, createRandomMessage } = require("./messageGenerator.js")
const { readJSONFile, writeJSONFile } = require("./helper.js")

const inform = console.log

function run() {
    let messages = readJSONFile("./data", "messages.json")

    if (process.argv[2] === 'create') {
        const newMessage = createRandomMessage()
        messages.push(newMessage) 
        writeJSONFile("./data", "messages.json", messages)
        inform(`New message added to the JSON file.`)
    } else if (process.argv[2] === 'create-multiple') {
        if (process.arv[3]) {
            const numberOfMessages = parseInt(process.argv[3], 10)
            const newMessages = randomMessageFactory(numberOfMessages)
            messages = messages.concat(newMessages)
            inform(`${numberOfMessages} new messages added to the JSON file.`)
        } else {
            inform(`Please specify the number of messages to create`)
        }

    } else {
        inform('Invalid command. Usage: npm run create | npm run create-multiple <number>')
    }

}


run()