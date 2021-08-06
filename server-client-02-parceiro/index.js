const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cliente Parceiro De Pé!");
});

app.post("/api/ausencias", (req, res) => {
  res.type("application/json");
  const compareData = [
    {
      data: "2021-10-12",
      tipo: "Descanso",
      id_externo_colaborador: "1-1-101010",
      nome_colaborador: "Noah Da Silva",
    },
    {
      data: "2021-10-13",
      tipo: "Folga",
      id_externo_colaborador: "1-1-101010",
      nome_colaborador: "Noah Da Silva",
    },
  ];
  const incomingData = JSON.stringify(req.body);
  if (JSON.stringify(compareData) === incomingData) {
    res.send(JSON.stringify({ status: "OK" }));
  } else {
    res.status(406).send(JSON.stringify({ status: "ERROR - Not Acceptable" }));
  }
});

app.get("/api/colaboradores", (req, res) => {
  res.type("application/json");
  const responseData = [
    {
      id_externo_colaborador: "1-1-101011",
      nome_colaborador: "Marco Antonio",
      data_nascimento_colaborador: "1993-06-05",
    },
    {
      id_externo_colaborador: "1-1-101011",
      nome_colaborador: "Noah Da Silva",
      data_nascimento_colaborador: "2005-11-06",
    },
  ];
  res.send(JSON.stringify(responseData));
});

app.listen(port, () => {
  console.log(`Cliente Parceiro escutando em http://localhost:${port}`);
});
