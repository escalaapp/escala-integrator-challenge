const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Escala Jornadas Up!");
});

app.get("/api/v1/events", (req, res) => {
  res.type("application/json");
  const responseData = [
    {
      date: "2021-10-12",
      type: "Descanso",
      external_employee_id: "1-1-101010",
      employee_name: "Noah Da Silva",
    },
    {
      date: "2021-10-13",
      type: "Folga",
      external_employee_id: "1-1-101010",
      employee_name: "Noah Da Silva",
    },
  ];
  res.send(JSON.stringify(responseData));
});

app.post("/api/v1/employees", (req, res) => {
  res.type("application/json");
  const compareData = [
    {
      external_employee_id: "1-1-101011",
      employee_name: "Marco Antonio",
      employee_birthday: "1993-06-05",
    },
    {
      external_employee_id: "1-1-101011",
      employee_name: "Noah Da Silva",
      employee_birthday: "2005-11-06",
    },
  ];
  const incomingData = JSON.stringify(req.body);
  if (JSON.stringify(compareData) === incomingData) {
    res.send(JSON.stringify({ status: "OK" }));
  } else {
    res.status(406).send(JSON.stringify({ status: "ERROR - Not Acceptable" }));
  }
});

app.get("/api/v1/timetables", (req, res) => {
  res.type("application/json");
  const responseData = [
    {
      time_start: "08:00",
      time_end: "17:00",
      time_interval: 60,
    },
  ];
  const responseDataString = JSON.stringify(responseData);
  res.send(responseDataString.substring(0, responseDataString.length - 7));
});

let reqCount = 0;
app.post("/api/v2/employees", (req, res) => {
  res.type("application/json");
  reqCount++;
  if (reqCount % 3 > 0) {
    res
      .status(503)
      .send(JSON.stringify({ status: "ERROR - Service Unavailable" }));
    return;
  }
  const compareData = [
    {
      external_employee_id: "1-1-101011",
      employee_name: "Marco Antonio",
      employee_birthday: "1993-06-05",
    },
    {
      external_employee_id: "1-1-101011",
      employee_name: "Noah Da Silva",
      employee_birthday: "2005-11-06",
    },
  ];
  const incomingData = JSON.stringify(req.body);
  if (JSON.stringify(compareData) === incomingData) {
    res.send(JSON.stringify({ status: "OK" }));
  } else {
    res.status(406).send(JSON.stringify({ status: "ERROR - Not Acceptable" }));
  }
});

app.listen(port, () => {
  console.log(`Escala Jornadas listening at http://localhost:${port}`);
});
