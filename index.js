/**
 * Created by vprasad02 on 06-Apr-17.
 */
var express=require('express');
var app=express();

app.set('port',(process.env.PORT || 5000));
app.use(express.static(__dirname+'/app'));
app.use(express.static(__dirname));

app.get('/',function(request,response){
  response.render('index.html')
});

app.listen(app.get('port'),function(){
  console.log('Node app is running on port no.'+app.get('port'));
})
