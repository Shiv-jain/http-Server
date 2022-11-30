const http = require('http');
const port = 3000;

const friends = [
    {
        'id' : 0,
        'name' : 'Shivam Jain'
    },
    {
        'id' : 1,
        'name' : 'Shivam Kumar'
    },
    {
        'id' : 2,
        'name' : 'Gavish Goel'
    },
    {
        'id' : 3,
        'name' : 'Gopa Jeswanth'
    },
    {
        'id' : 4,
        'name' : 'Himanshu Saha'
    }
]

const server = http.createServer((req,res) => {
    req.statusCode = 200;
    const items = req.url.split('/');
    if(req.method === 'POST' && items[1] === 'friends'){
        req.on('data',(data) => {
            const friend = data.toString();
            console.log(`Request : ${friend}`);
            friends.push(JSON.parse(friend));
        })
        req.pipe(res);
    }else if(req.method === 'GET' && items[1] === 'friends'){
        res.setHeader('Content-Type','application/json');
        if(items.length === 3){
            res.end(JSON.stringify(friends[Number(items[2])]));
        }
        else{
            res.end(JSON.stringify(friends));
        }
    }else if(items[1] === 'messages'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Hello Bro! </li>');
        res.write('<li> How is your day going ? </li>')
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    else{
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port,() => {
    console.log(`Server is listening to port : ${port}`);
});