var bodyParser=require('body-parser');

var data=[{item:'item1'},{item:'buy ketchup'},{item:'item3'}];

var urlencodedParser=bodyParser.urlencoded({extended:false});
module.exports=function(app){


  app.get('/todo',function(req,res)
  {
 	console.log("Inside get");
    res.render('todo',{todos:data});
  });

  app.post('/todo',urlencodedParser,function(req,res){
	console.log("inside post adding ");
	data.push(req.body);
	res.json(data);
  });

  app.delete('/todo/:item',function(req,res){
    data=data.filter(function(data){
	console.log("inside delete");
      return data.item.replace(/ /g,'-') !== req.params.items;
  });
  });


}
