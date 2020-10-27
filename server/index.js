const express = require('express');
const mc = require('./controllers/messages_controller');

const app = express();
app.use(express.static(__dirname + '/../public/build'))

app.use(express.json());

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.delete('/api/messages/:id', mc.delete)
app.put('/api/messages/:id', mc.update)



const port = 3001;

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})