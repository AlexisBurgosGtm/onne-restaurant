var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

const execute = require('./router/connection');
var routerComandas = require('./router/routerComandas');
var routerEmpleados = require('./router/routerEmpleados');
var routerProductos = require('./router/routerProductos');
var routerTipodoc = require('./router/routerTipoDocs');
var routerAdmin = require('./router/routerAdmin');

var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = process.env.PORT || 444;

app.use(bodyParser.json());

app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
/*  
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name, pplication/json');
        // Set to true if you need the website to include cookies in the requests sent
      res.setHeader('Access-Control-Allow-Credentials', true);
*/
  //console.log("/" + req.toString());
  next();
});

app.get("/",function(req,res){
  execute.start();
	res.sendFile(path + 'index.html');
}); 



//Router para app COMANDAS
app.use('/comandas', routerComandas);

//Router para app EMPLEADOS
app.use('/empleados', routerEmpleados);


//Router para app PRODUCTOS
app.use('/productos', routerProductos);

app.use('/tipodocumentos', routerTipodoc)

app.use('/admin', routerAdmin)


app.use("/",router);

app.use("*",function(req,res){
  //res.sendFile(path + 'build/404.html');
  res.send('<h1>No permitido</h1>')
});


// SOCKET HANDLER
io.on('connection', function(socket){
  
  socket.on('comandas nueva', (msg,usuario)=>{
    io.emit('comandas nueva', msg,usuario);
  });
 
  socket.on('comandas finalizada', (msg,usuario)=>{
    io.emit('comandas finalizada', msg,usuario);
  });
  
});


http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

