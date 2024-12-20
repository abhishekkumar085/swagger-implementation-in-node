import swaggerAutogen from 'swagger-autogen';
import path from 'path';

const swaggerAutogenInstance = swaggerAutogen();

const swaggerFile = path.resolve('src/docs/swagger.json');
const apiRouteFile = [path.resolve('src/index.js')];  

swaggerAutogenInstance(swaggerFile, apiRouteFile).then(() => {
  console.log('Swagger documentation generated successfully!');
});
