const http = require('http');
const fs = require('fs');
const xml2js = require('xml2js');

// We will get images from the CatAPI https://thecatapi.com/
let catApi = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=1';

let catUrl = '';
let catSource = '';

let server = http.createServer(function(req, res) {
    // Get fresh cat data from the Cat API
    http.get(catApi, (res) => {
        let data = '';
    
        // Attach event listener for when receiving data from the remote server is complete
        res.on('end', () => {
            console.log('***We have completed cat data\n***');
            console.log(data);
      
            let parser = new xml2js.Parser();
            return parser.parseString(data, function(err, imgxml) {
                if (err) {
                    return console.log('Error parsing cat data');
                } else {
                    console.log('imgxml', imgxml.html.body[0].p[0].a)
                    let imgjson = JSON.parse(JSON.stringify(imgxml));
        
                    console.log('***We have cat JSON***');
                    console.log(imgjson.html.body[0].p[0].a);

        
                    catUrl = imgjson.response.data[0].images[0].image[0].url[0];
                    return catSource = imgjson.response.data[0].images[0].image[0].source_url[0];
                }
            });
        });
    
        // Event listener for the 'data' event
        // In this case, accumulate all the data so we can use it all at once later
        return res.on('data', (xml) => {
            return data += xml;
        });
    });

    // Serve cat images from the CatAPI
    return fs.readFile('./cats.html', function(err, cathtml) {
        if (err) {
            console.error(err);
            return res.end('An error occurred');
        }
    
        let html = cathtml.toString()
                          .replace('IMGSRC', catUrl)
                          .replace('SOURCE', catSource);
    
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
    
        res.write(html);
        return res.end();
    });
});

// Run the server
server.listen(4000);