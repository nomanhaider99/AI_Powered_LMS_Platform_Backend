import app from './index';
import { envs } from './config/envs';

const port = envs.port || '8000';
app.listen(port, () => {
  console.log(`Server is Listening on port: ${port}`);
});
