const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const fragmentos = [
  "Toda escolha tem um preço. O problema é que você quer pagar parcelado pela sua covardia.",
  "Quem tem medo de cair continua rastejando.",
  "Você não precisa de motivação. Precisa de vergonha na cara.",
  "A verdade não liberta. Primeiro, ela destrói.",
  "A maioria quer mudança... até perceber que ela exige sacrifício.",
  "Tu não é fraco. Tu só mente bem pra si mesmo.",
  "Ninguém foge da própria sombra. Só corre em círculos.",
  "Ou você se domina, ou vai ser dominado por quem tem coragem de se encarar.",
  "O caos só assusta quem tentou fingir que a vida era controle.",
  "Se o mundo te moldou, parabéns: agora você é uma cópia funcional e vazia."
];

app.get('/fragmento', (req, res) => {
  const aleatorio = fragmentos[Math.floor(Math.random() * fragmentos.length)];
  res.json({ texto: aleatorio });
});

app.listen(port, () => {
  console.log(`Caverna API rodando na porta ${port}`);
});
