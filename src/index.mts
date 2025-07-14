import express from 'express';
import { supervisor } from './agents/index.mts'

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send('Hello World!');
  const config = {
    configurable: { thread_id: '1' }
  }
  const result = await supervisor.invoke(
    {
      messages: [
        {
          role: 'user',
          content: '你好',
        }
      ],
    },
    config,
  )
  console.log(result?.messages?.[1]?.content)
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
