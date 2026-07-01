# we have crud knowledge and auth we are gonna combine it now : also learning deployment and setting up documentation on swagger api 

- our job will be setting up the api  so backend front the front end is there just to give you a better overall perspective on how the api is going to be consumed and idea is where we have front end we can log in or register so if course if i haven't created my account then  first i would need to register so i go over here and then i'll type some kind of gibberish i'll say that i'm peter the email will be .. then the secret whether you are login or registering you are sending a token the json web token and then on front end will right away be able to showcase the user account so if i go here and say i want to register if i submit and provide the correct values i can see my dashboard since i created my account i have no jobs i just need to provide the values , i can delete edit the job and also i can see single job and when i am sending a patch req its gonna be a patch request 

- if you want ti use that project in src code change baseURL 

- this time here we have and i am gonna check multiple mongoose error instead of sending back always 500 one 

- now i can start setting up our auth model , the first thing i want to create a user model => more mongoose validators: on mongoose readme 

- now starting with register controller[how we are gonna made it see in README.MD]