import express from "express";
import OpenAI from "openai";
import 'dotenv/config'
import cors from 'cors'

const app = express();

const port = 3000;

const openai = new OpenAI();

app.use(cors())
app.use(express.json())
app.post("/prompt", async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant specialized in novel startup ideas.",
      },
      { role: "user", content: prompt },
    ],
    model: "gpt-3.5-turbo"
  });

  res.status(200).send(completion.choices[0].message.content)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
