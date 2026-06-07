## what it gonna teach 

- set up and connect cloud database basicall how to persist our data to cloud , h0ow to apply all the crowd operations and crud stands for create read update and delete on our data which is fundamental 

## how it works 

- it shows basic res and req cycle => on front end we got a form list and by sending request to our api the user can create read update abd destroy again

## functionality

- if you enter something and submit we send of the post req and we get a new task we can also delete the task we can edit also by seeing specfic data and if we navigate it back we can see it is completed

## setup

RUN

1. npm init -y

2. npm install express dotenv mongoose[ DEPENDICE- NEEDED TO RUN THE PROJECT]
3. npm install nodemon --save-dev [ DEV-DEPENDICE NEED IN DEVLOPMENT ]

4. modify pkg.json

"scripts": {
    "start": "nodemon app.js"
  },

# optional if you didnt install particular pkgs and onky inlisted them in pkg.json by creating npm init -y

## approch for the project

at start i just created a simple server and a simple route for which base url is /hello and send response 'Task Manger App' using get method

and the server is listening on port 3000 which prints `Server is listening on port ${PORT} `

- after this i decided what routes i should make in which was 

=> get all my new task which is get req

=> i can crete new task which is post request

=> i can also delete one => delete method

=> for edit we open a new page and get info about a specfic route so theres a get req that just get me info about one single task also and also we can edit the task from checklist so theres a route fir that also 

Ques -> now i got a quest, if i use the convention for apis why get and post same apis and get patch and delte diffrent api why there is no single task or something alsong those lines 

Ans -> its a convention

- the workflow gonna be like 

basic routes[with some simple response ] -> postman setup -> setting up database 

- NOW THE ACTUAL START 

first lets setup the router and controller for the get route -> hi here all the items or something along those lines and then

AND THEN WE MOVE FURTHER 

- first setting up the route for / => all items through get req and then exporting it 

- now setting up the middleware for the above route and 

-now we are sending json from our application and since i want to access that data in my routes is to get middleware that is built into express json [make it above the routes]

# now how are things connected 

- i used MVC (Model-View-Controller)

- app.js[entrance]

client(brower) wants a pkg(data) so we send a req which travel through some checkpoints ->

When someone types your URL into their browser, they hit app.js ->"Okay, if the address starts with /api/v1/tasks, I am handing this off to the tasks variable"-> That tasks variable is actually your routes file because of line 3: require('./routes/task').

- routes[traffic-controller]

app.js already handled the /api/v1/tasks part, this file only cares about what comes after that. The / means the "root" of that path.->It sees it's a GET request and says, "I need to run the getAllTask function"->

-controller[worker]

This sends the text back through the chain, out to the user's browser.

# app.js (The Address) -> routes/task.js (The Direction) ->controllers/task.js (The Action)

Ques -> for / how does app.js understand to see in task.js[routes] bcz we didnt make a path for that.

Ans -> it wouldnt open just change to this it will make sense app.use('/',tasks)

actually i forget its router addition api/v1/tasks is just base url in app if  you got to route you dont have to write that thing again again 

## now thats how we gonna work and gonna make others like that 

1. make controllers 
2. connect them with routes
3. import all that in app

after creating all of them the prob -> we can only test single task get all task bcz thats default method the browser performs -> POSTMAN

## Now testing all the apis on INSOMONIA

- also remember that for post request change  res.send('create task') to res.json(req.body)
now you can see more betterly that your middleware works or not and it would be faster to send whatever i get from the client on server

- we didnt setup our database so theres no real id but we can test it with some giberish also its a get => :id => its our param her also change gettask into res.json 

- now do the testing for other routes

# now use of REST-API => its a pattern to reprent apis
# and as for database => go for monogodb atlas

- in database access who can access our project
- in network acesss => from where we are setting up our database

- during deployment setup the ip adress
- connection string for connecting data string which we are gonna setup in enviourment variable[db]

- during production our once we deploy project on horoku you have to use anwhere option in ip adress bcz if you dont you will have error in app during connecting mongodb

# now for connecting database to our project -> use mongoose 

- if you enter the wrong waring you will get an atlas error warning

# the prob with mongoose our basic setup 

- that our server and datbase connection are not in sync  ; ex:- cosole.log server listening on then we are connecting to the database but what is use pf server if databaase is missing 

- so why dont we connect to the database and then we spin up the server in order to do that refracte code and i am not gonna invoke  mongoose connect in connect.js i will refracte the code and set it up as a fn and invoke it in appp.js and use env variable for that 

# why we put the code in .env 

- then anyone can manipulate our database

# now setting up our future docs and assign them to the collection using schema and model fom mongoose

- now whats schema => when we set up our docon atlas theres no structure but thats what i want where my tasks only want the name which is going to be a string and only valuable and needed things 

- now in schema we are gonna set up our collection and the syntax: key value pairs and data type its bair min

# after setting up schema set up model[set of collection]

- also imp point when we push this into our databse it will added to that specfic collection and in mongoose model is a wrapper for the schema so if schema defines the structure for doc like type validation a mongoose model provide interface to the database and we wiil use model to for crud [full-theroy-on-mongoose-docs]

- after creating new doc you will have collection on atlas

- now set up the four controller in similar fashion

# the prop we specified in our schema will be pass on to the database everything else is gonna be ignored => on postman add proper results gonna be the same => imp point schema's proper only passsed

# now validation => we can pass empty values,object  not the best setup

# so what we did is 

- modals/task.js => define what task looks like how mongo store it
- in short we created a model ; Task model = manager of task collection can do CRUD operations 
- then in task.js we handle that and create docs for mongodb
- controller DOES NOT directly talk to MongoDB, It talks to MODEL,The MODEL talks to MongoDB.

# above we discussed validation, need for try-catch and we have a synchronus approch 

- now we know how to create a task .create() we know that how we have a model in the model we pass in schema and in orderto get the instance we go with thc name of model and method is dot create now for the rest of all the operation we are gonna use crud operation which return mongoose query object => for read .find()

- now we know how to read task  now for get req: the idea =>genral respons: if id that we pass in doesnt match any of the tasks that we currntly have in order to get up and running we'll navigate back to the docs to the mongoose docs and in this case were looking for .findOne()

- in this we have two error 1st in try catch block we have genric one => two response 404 and 500 => if we change the last digit simply err runs but if we add/remove soemthing cast error this error is send by mongoose if it doesnt match the syntax error 

- now for delete task => then update task which needs a bit more of a functionalty bcz we are updating something and we are gonna need some validators bcz we passing some options => params one and body one 

# now the basic functionalty is completed only the finishing remains

- q-> why we used patch here and put in tutorial
- patch[partial-update] and put[replacing-existing-resource]

`````````` whats actually happend 

for patch see on postman in update task if id is correct then only on properties that i'll pass in will be updated so in this case if i go with shake and bake no.2 i''ll actually remvie complted only the property that is passed in will be updated so if i send ;see i get the task and i cqan clearly see that completed is there even though i didnt pass it why bcz thats how our fuctionalty is set up in controller so if i pass complted and i'll set it equal to false of course it will be updated as well so if i go completed and set it as false yes in this case i am gonna get new result now for the diffrence with put we manipulate the server [controller-route] now on insomnia test the manipulated server api 
you see if  i send only the name my expectation is that rest of the properties which of course in our case is just completed will be removed from that item so we will replace that item and how is that going to look like in our controller well here going to be exactly same but by defalut mongoose doesnt do that by default so mongoose is going to be like okay so you want to get item you want to update it awesome just get me the properties you want to update and rest of them will stay the same and if actually want to remvies those prop the ones that i am not pasing in with my request i need to add another option here and the option name is overwrite and set equal to true noiw the controller works 
so the diffrenece wehre when we work with put the expextation is that we'll replace the item so we'll just pass in the properties that we want to set up in item and them rest of them will be remved but with patch we're just updating the properties that we're passing in justr rember that in real life put have same fuctionalty as patch in our case we are gonna use patch 
```````````

