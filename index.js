const http= require("http");

const server =http.createServer((req,res)=>
{
  res.end("This is my first server created by me !");
});

//how to identify request 
server.listen(9000,"127.0.0.1",()=>
{
  console.log("listening to the port no 9000");
});