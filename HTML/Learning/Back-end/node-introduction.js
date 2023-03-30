const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Animations</title>
    </head>
    <style>
        .container {
            background-color: rgb(53, 53, 255);
        }
        
        .box {
            background-color: aqua;
            width: 250px;
            height: 250px;
            position: relative;
            /* animation-name: anim; */
            animation-name: anim2;
            animation-duration: 5s;
            /* animation-iteration-count: infinite; */
            animation-iteration-count: 3;
            /* animation-fill-mode: forwards;
        animation-fill-mode: alternate;
    
        animation-timing-function: ease-in;
        animation-timing-function: ease-out;
        animation-timing-function: ease-in-out;
    
        animation-delay: 1s; */
            /* animation-direction: reverse; */
            /* animation: name duration timing-function delay iteration-count direction fill-mode; */
            /* These properties can be set using this shorthand */
            /* animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-fill-mode; */
            /* animation: harry 5s ease-in 1s 12 backwards; */
        }
        
        @keyframes anim2 {
            0% {
                top: 0px;
                left: 0px;
            }
            25% {
                top: 250px;
                left: 0px;
            }
            50% {
                top: 250px;
                left: 250px;
            }
            75% {
                top: 0px;
                left: 250px;
            }
            100% {
                top: 0px;
                left: 0px;
            }
        }
        
        @keyframes anim {
            form {
                width: 250px;
            }
            to {
                width: 500px;
            }
        }
    </style>
    
    <body>
        <div class="container">
            <div class="box">
                This is box
            </div>
        </div>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});