import { supervisor } from './agents/supervisor.mts'

const run = async () => {
    const stream = await supervisor.stream({
        messages: [{
            role: "user",
            content: "first book a flight from BOS to JFK and then book a stay at McKittrick Hotel"
        }]
    })

    for await (const chunk of stream) {
        console.log(JSON.stringify(chunk, null, 2));
    }
}

run()
