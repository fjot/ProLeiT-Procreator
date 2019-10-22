import app from './app';
import Api from './api';

const port = 8000;
Api.api();

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
  console.log("Running a GraphQL API server at localhost:8000/graphql");
});
