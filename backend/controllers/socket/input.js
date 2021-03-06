
const gameSessionService = require("./../../services/GameSessionService");

const onKeyDown = (socket, data) => {
    let session = gameSessionService.getSession(data.sessionID);
    session.lastInput.event = 'onKeyDown';
    session.lastInput[data.keyCode] = true;
};

const onKeyUp = (socket, data) => {
    let session = gameSessionService.getSession(data.sessionID);
    session.lastInput.event = 'onKeyUp';
    session.lastInput[data.keyCode] = false;
};

const onNewSession = (socket, data) => {
    let sessionID = gameSessionService.addSession()

    const asEditor = data.issuer === "LEVEL_EDITOR"
    const gameEngine = gameSessionService.getSession(sessionID)
    gameEngine.setEditorMode(asEditor)

    socket.emit('newSessionID', {
        session: sessionID,
        issuer: data.issuer
    })
};

const onClick = (socket, data)=>{
    let session = gameSessionService.getSession(data.sessionID);
    session.lastInput.event = 'onClick';
};


module.exports = {
    onKeyDown,
    onKeyUp,
    onClick,
    onNewSession
}