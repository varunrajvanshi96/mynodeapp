var bodyParser=require('body-parser');

var data=[{item:'item1'},{item:'buy ketchup'},{item:'item3'}];

var urlencodedParser=bodyParser.urlencoded({extended:false});
module.exports=function(app){


  app.get('/todo',function(req,res)
  {
    res.render('todo',{todos:data});
  });

  app.post('/todo',urlencodedParser,function(req,res){
data.push(req.body);
res.json(data);
  });

  app.delete('/todo/:item',function(req,res){
    data=data.filter(function(todo){
      return todo.item.replace(/ /g,'-') !== req.params.items;
  });
  });


}
