const http= require("http");

const server =http.createServer((req,res)=>
{
  if(req.url=='/')
  {
    res.end("This is my first server created by me !");
  }
  else if(req.url=='/about')
  {
    res.end("this is about page");
  }
  else if(req.url=='/contact')
  {
    res.end(" this contact page ");
  }
  else {
    res.writeHead(404,{"content-type":"text/html"});
    res.end(" <h1>This is  400 error page</h1>");
  }
});

//how to identify request 
server.listen(9000,"127.0.0.1",()=>
{
  console.log("listening to the port no 9000");
});