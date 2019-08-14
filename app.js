const { PORT } = process.env.PORT;
const { NODE_ENV } = process.env.NODE_ENV;

const app = require('./app.routes');

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
