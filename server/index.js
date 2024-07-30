require('dotenv').config();
const { send } = require('process');
const handleFetch = require("./utils");
express = require("express")
const app = express()
const path = require('path');

const key = process.env.API_KEY

const serveGifs = async (req, res) => {
  const [data] = await handleFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=3&rating=g`)
  res.send(data)
};

const pathToDistFolder = path.join(__dirname, '..', 'front-end', 'dist');
const serveStatic = express.static(pathToDistFolder);


app.use(serveStatic);
app.get('/api/gifs', serveGifs);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`)
})