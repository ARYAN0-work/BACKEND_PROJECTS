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

