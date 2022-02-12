const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mysql = require('mysql');

const io = require("socket.io")(server, { 
    cors: {    
      origin: "*",    
      methods: ["GET", "POST"]  
    }
  }
);

var con = mysql.createConnection({
  host: "test.ubware.it",
  user: "devdb",
  password: "devdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


io.on("connection", socket => {
    let previousId;
    

    const safeJoin = currentId => {
      socket.leave(previousId);
      socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
      previousId = currentId;
    };

    socket.on("getMacchinari", () => {
        console.log(`Socket ${socket.id} getMacchinari`);
        con.query("select * from ubmachinery_test.Macchinario", function (err, result) {
          if (err) throw err;
          socket.emit("macchinari", result);
        });
    });

    socket.on("getMacchinario", id => {
        console.log(`Socket ${socket.id} getMacchinario`);
        safeJoin(id);
        socket.emit("macchinari", macchinari[id]);
    });

    socket.on("addMacchinario", macchinario => {
        console.log(`Socket ${socket.id} addMacchinario ${macchinario.name}`);
        con.query(`insert into ubmachinery_test.Macchinario(descr,name) values ('${macchinario.descr}','${macchinario.name}')`, function (err, result) {
          if (err) throw err;
        });
        
        con.query(`select * from ubmachinery_test.Macchinario where id=(SELECT LAST_INSERT_ID())`, function (err, result) {
          if (err) throw err;
          let macchinario = JSON.parse(JSON.stringify(result))[0];
          console.log(macchinario);
          io.emit("macchinario", macchinario);
        });
    });

    socket.on("editMacchianrio", macchinario => {
        console.log(`Socket ${socket.id} editMacchianrio`);
        macchinari[macchinario.id] = macchinario;
        socket.to(macchinario.id).emit("macchinario", macchinario);
    });

  
    console.log(`Socket ${socket.id} has connected`);
  });
  

  server.listen(4444, () => {
    console.log('Listening on port 4444');
});
  