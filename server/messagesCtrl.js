const allMessages = [];

module.exports = {
    getAllMessages(req, res, next){
        res.status(200).send(allMessages)
    },
    createMessage(req, res, next){
        const { username, message} = req.body;
        const newMessage = {
            username,
            message
        };

        if (req.session.history) {
            req.session.history.push(newMessage);
          } else {
            req.session.history = [];
            req.session.history.push(newMessage);
          } 

        allMessages.push(newMessage)
        res.status(200).send(allMessages);
    },
    history(req, res, next){
        res.status(200).send(req.session.history)
    }
};