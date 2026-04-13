import http from 'node:http';
import { stock } from './stock.mjs';
import { json } from 'node:stream/consumers';

const server = http.createServer();

server.addListener('request', (request, response) => {
    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(stock));
        response.end();
    } else if (request.url === '/get-unavailable-products') {
        const unavailableProducts = stock.filter(
            (product) => product.amountLeft === 0
        );
        response.writeHead(200, {'content-type': 'application/json'});
        response.write(JSON.stringify(unavailableProducts));
        response.end();
    }
});
server.listen(8000); 