import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJsonFilePath from './docs/swagger.json' assert { type: 'json' };

const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsonFilePath));

app.get('/', (req, res) => {        
    res.send('Hello World');
});
app.get('/posts', (req, res) => {        
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});