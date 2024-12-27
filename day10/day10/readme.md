# handle CORS error in Express JS
- CORS - Cross Origin Resource Sharing
    - like accessing realme phone data from amazon where as original data is from realme original website
    - like withdrawing money using sbi card in baroda bank atm.
-   <script>
        // fetch('http://localhost:4000/users') 
        - ip address + port number = domain name, example amazon.com, flipkart.com
        - 127.0.0.1  + 4000
            - here index.html is running at 5500 port 
            - and index.js is running at 4000 port
        - running in defferent server - here we get CORS error
        fetch('http://localhost:5500/index.json') 
            - here index.html is running at 5500 port 
            - and index.json is also running at 5500 port
        - running in same server - here we don't get CORS error
        // fetch('http://127.0.0.1:5500/index.json') // localhost === 127.0.0.1
        .then(res => res.json())
        .then(data => console.log(data))
    </script>
- this is the meaning for index.html, that we placed outsid of the folder
# Allowing CORS issue 
1. Method 1 default way
app.get('/users', (req, res)=>{
    // res.send("Get Success")
    res.setHeader('Access-Control-Allow-Origin', 
        'http://127.0.0.1:5500')
    res.send(users);
});
2. Method 2 Express.JS libraries, we can call it as middlewares
- CORS is on library or middleware.
