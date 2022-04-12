const app = require("express")();

app.use((_, res) => {
  res.send("Hello from service 2");
});

app.listen(4050);
