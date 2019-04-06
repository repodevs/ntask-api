import express from "express";

const PORT = 3000;
const app = express();

// API Home route
app.get('/', (req, res) => res.json({
    status: "NTask API Home"
}));


// API Tasks
app.get('/tasks', (req, res) => {
  res.json({
    tasks: [
      {title: "Buy some shoes"},
      {title: "Fix notebook"}
    ]
  });
});


app.listen(PORT, () => console.log(`NTask API running at port ${PORT}`));


