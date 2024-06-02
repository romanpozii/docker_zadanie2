const http = require('http');

// Funkcja zwracająca stronę HTML zawierającą adres IP klienta oraz datę i godzinę w jego strefie czasowej
function generateResponse(ip) {
    const date = new Date().toLocaleString("pl-PL", {timeZone: "Europe/Warsaw"});
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Informacje o Kliencie</title>
        </head>
        <body>
            <p>Adres IP klienta: ${ip}</p>
            <p>Data i godzina w strefie czasowej klienta: ${date}</p>
        </body>
        </html>
    `;
}

// Utworzenie serwera HTTP
const server = http.createServer((req, res) => {
    // Pobranie adresu IP klienta z nagłówka żądania
    const ip = req.connection.remoteAddress;

    // Wysłanie odpowiedzi z wygenerowaną stroną HTML
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(generateResponse(ip));
});

// Ustalenie portu, na którym serwer będzie nasłuchiwał
const port = 3000;

// Uruchomienie serwera
server.listen(port, () => {
    // Logowanie informacji o uruchomieniu serwera
    const date = new Date().toLocaleString();
    const author = "Roman Pozii";
    console.log(`Serwer uruchomiony. Data: ${date}, Autor: ${author}, Port: ${port}`);
});
