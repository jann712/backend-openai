import express from "express";
import OpenAI from "openai";
import 'dotenv/config'
import cors from 'cors'

// Aplicação Express
const app = express();

// Porta da aplicação
const port = 3000;

// Instância OpenAI
const openai = new OpenAI();


// CORS usado somente para desenvolvimento local mais fluído. Não coloque esse código assim em produção
app.use(cors())

//JSON para parsing do body da requisição
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
  console.log(`App listening on port ${port}`);
});
