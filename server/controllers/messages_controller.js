let messages = [];
let id = 0;


module.exports = {
    create: (req,res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages)

    },
    read: (req,res) => {
        res.status(200).send(messages);

    },
    update: (req, res) => {
        const { text } = req.body;
        const messageIndex = messages.findIndex(elem => elem.id == req.params.id)
        let elem = messages[messageIndex];
      
        messages[messageIndex] = {
          id: elem.id,
          text: text || elem.text,
          time: elem.time
        };
      
        res.status(200).send(messages);
      },
    delete: (req,res) => {
        const messageIndex = messages.findIndex(message => message.id == req.params.id)
        messages.splice(messageIndex,1);
        res.status(200).send(messages)

    }
}