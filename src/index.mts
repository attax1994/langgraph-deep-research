import express from 'express';
import { supervisor } from './agents/index.mts'
import { v4 as uuidv4 } from 'uuid';
import { StreamMode } from '@langchain/langgraph'

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send('Hello World!');
  const config = {
    configurable: { thread_id: uuidv4() },
    streamMode: 'messages' as StreamMode,
  }
  const result = supervisor.stream(
    {
      messages: [
        {
          role: 'user',
          content: '请研究1+1等于几',
        }
      ],
    },
    config,
  )
  for await (const chunk of await result) {
    console.log(chunk);
    console.log("\n");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
