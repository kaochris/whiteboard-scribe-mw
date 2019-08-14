const PORT = process.env.PORT || 8080;

const app = require('./app.routes');

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
