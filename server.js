import 'dotenv/config';
import app from './src/app.js';

app.listen(process.env.PORT || 8080, () => {
  console.log('server is listening at https://localhost:8080');
});
