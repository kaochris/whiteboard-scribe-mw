const { PORT } = process.env;
const { NODE_ENV } = process.env;

const app = require('./app.routes');

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
