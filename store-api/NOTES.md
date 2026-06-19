- we are gonna learn about advanced filtering sorting and dynamically populating our database and other bunch stuff....

- in this we already built the entire search functionalty on front-end we're done with building api the front-end only needs to make http calls and we send back the data  

- after setting the server move upto mongo and connect to DB => CLUSTER -> CONNECT -> FIND PASSWORD 

- now we are gonna move to routes -> 2 rotes 
1st one -> manual testing ; setting up the router

- now test these on insomnia my making new project

- check base URL then test for products and static

- now before moving to mongoose see we have no async-Wrapper and remember we needed to use something either we set up try catch everywhere or setup async wrapper but when we are setting up i also have express-async-error and essentialy we have to go back to app.js then we have to just import it 

# by the way command for async-wrapper : npm install express-async-wrapper


### explore this 

- diffrence between these two commands => npm install express-async-errors  and npm install express-async-wrapper

- now stting up the modals ; in order to show these propertiees i am gonna setup schema

- now setting up our database ; 2 choice: you either can setup post route and then just manually add them or a better approch is just to attomate this and essentially have kind of list and pass it on to your database now if you notice product.json we have to only setup populate.js
