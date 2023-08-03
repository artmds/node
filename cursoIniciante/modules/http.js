const http = require ('http')

const port = 8080

const server = http.createServer((req, res) => {
    //Enviando um HTML
    if(req.url === "/home"){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end("<h1>home page</h1>")
    }
    
    //Enviando um JSON
    if (req.url === '/users'){
        const users = [ 
            { 
                name: 'barno',
                email: 'barno1@gmail.com'
            },
            {
                name: 'outroBarno',
                email: 'outroBarno@gmail.com'
            }
        ]
        
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users));
    }
})

server.listen(port, () => console.log(`Listening at port ${port}`))