- the json web token basics project

- all the routes were public meaning anyone can access them and use them however they plz so for restricting this => jwt[long-strings]

// overview 

- imagine we have 2 routes a dashboard and a login or register route now dashboard is protected so i can click all day lon on get data but i'll have no accesss to it but only if i logn in i get the token and only once i have the token i can access the secret info which in this case is just going to be a random no. 

- we do the isername and password then get the token and can make as many request as we want in short if  a valid token is present in the request the user can access specfic info now not all of the info of course you can only acess the info that belongs to you so you cannot just randomly come here and get my data but still if token is present you can get the specfic data but if we have a restrcted route keep in mind login is not restricted anyone one can do it but if we do have 