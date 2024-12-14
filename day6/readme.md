# REST API
1. what is query string ? - req.query.something
    - http://localhost:4500/mobiles/?id=2
    here "id=2" is the query string.
    what is after "?" will be the "query string"
    - http://localhost:4500/?city=Hyderabad
    - http://serverip:4444/mobiles?id=3&name=xyz
        - here "id=3&name=xyz" will be
        - like this: here from "client -> server" it will go like an "OBJECT" like "KEY: VALUE" pairs
            query = {
                id: 3,
                name: xyz
            }
        - here all these are same "module = library = packages"

        function(req, res) 
        - here "req" object has "information about client -> server"
            - like
                - Header
                - URL
                - all the information about client
        - here "res" has "information what we want to send as response to server -> client"
    - req = {
            htij: {},
            query: {
                city: abc,
                name: hi,
            }
        }
    - here "/?city=Hyderabad"

    - localhost:4500/?city=Andhra
        - Hello welcome to Andhra

    - localhost:4500/?city=Hyderabad
        - Hello welcome to Hyderabad

2. what is path parameters ? - req.params.something
- amazon/users/user2
    - here "user2" is path parameters
    - req = {
            htij: {},
            query: {
                city: abc,
                name: hi,
            }
            params:{
                city: 
            }
        }
    - here "/:city'
        - it means 
            /xyz
            /ms
            /    - here it means city is empty
        all these are comes to /:city only
    
    - localhost:4500/Andhra
        - Hello welcome to Andhra

    - localhost:4500/Hyderabad
        - Hello welcome to Hyderabad

3. How to access them in node js ?

- query paramters

    - localhost:4500/?city=Andhra
        - Hello welcome to Andhra

- path parameters

    - localhost:4500/Hyderabad
        - Hello welcome to Hyderabad

