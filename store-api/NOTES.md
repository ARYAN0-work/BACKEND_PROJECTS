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
here we will dynamically add all values to our database

- now after connecting to DB : things i want to do is remove all the products i currently have then i want to create and just pass the json product     

- now if we want to search for the product in mongoose we need to go with find method => find (empty object) +> you will get all the objects 

- now implementing the all product and start implementing the get all products where setup is more complex then just hard coding => mainly key value querie parameter[3:55 to 4:00] revise

- now setting up the logic 

- now what if in query string params we're going to pass some kind of value that doesn't match any values that we have currently in the model so remeber we're setting up the model we have name price featured and blah blah but happens if i sent a request a page 

- now using queryOperators -> numeric filters with name 

- now how to sort our data first in final then genral mongoose setup then in our setup also sorting doesnt affect deosnt affect  the amount of items we're returning just the order in which they are returning 

for now based on a date when they are created and of course since we added them dynamically that means the entire batch  {{URL}}/products?sort=name now product are gonna be in alphabetical order now for sort them in z to a use -name and now if if i want to look at my rpices also {{URL}}/products?sort=name,price same for -price 

- in short lets start the static approch 

- now how to see certain fields {{URL}}/products?fields = name,price 

- now for skip and limit  {{URL}}/products?limit=4 => for how many project we gonna have , i have 23 so if i do 30 we will have 23

- FOR LIMIT SEE AGAIN 