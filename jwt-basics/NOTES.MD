- the json web token basics project

- all the routes were public meaning anyone can access them and use them however they plz so for restricting this => jwt[long-strings]

// overview 

- imagine we have 2 routes a dashboard and a login or register route now dashboard is protected so i can click all day lon on get data but i'll have no accesss to it but only if i logn in i get the token and only once i have the token i can access the secret info which in this case is just going to be a random no. 

- we do the isername and password then get the token and can make as many request as we want in short if  a valid token is present in the request the user can access specfic info now not all of the info of course you can only acess the info that belongs to you so you cannot just randomly come here and get my data but still if token is present you can get the specfic data but if we have a restrcted route keep in mind login is not restricted anyone one can do it but if we do have 

- here we are not going to play with data => you can delets it its just a remainder how project needs to be setup 

- here we have 2 routes one fake one for login register and sign up also theres a diffrence between registering and just login 

- also we need to pass data for login route bcz we are making a post request

- now starting to setup jwt and auth

- we have two routes as shown 

# JWT (JSON Web Token)

## Why do we need JWT?

Imagine a website with some **public** routes and some **protected** routes.

### Public Route
- Anyone can access it.
- No authentication required.

Example:
- Login
- Register
- Signup

### Protected Route
- Only authenticated users should access it.
- Example:
  - Dashboard
  - User Profile
  - Orders
  - Admin Panel

---

## JWT Flow

### Step 1: Login

The client sends a login request with credentials.

```text
Client  --------------------->  Server
        username + password
```

The server checks whether the credentials are valid.

- If invalid → Return an error.
- If valid → Create a JWT.

The server sends the JWT back to the client.

```text
Client  <---------------------  Server
            Signed JWT
```

---

### Step 2: Access Protected Routes

Whenever the client wants to access a protected route, it sends the JWT along with the request.

```text
Client  --------------------->  Server
       Request + JWT Token
```

The server verifies the JWT.

- Valid token → Allow access.
- Invalid or expired token → Reject the request.

If the token is valid:

```text
Client  <---------------------  Server
         Protected Data
```

---

## Important Points

- Login route is **public**.
- Register route is **public**.
- Signup route is **public**.
- Dashboard is **protected**.
- JWT is generated only after successful login.
- The client stores the JWT (usually in a cookie or localStorage).
- Every future request to protected routes includes the JWT.
- The server verifies the JWT before sending protected data.

---

## Project Setup

We currently have two routes:

### 1. Login Route (Public)

- Accepts username and password.
- Verifies credentials.
- Returns a signed JWT.

### 2. Dashboard Route (Protected)

- Requires a valid JWT.
- Returns protected information only if authentication succeeds.

---

## Overall Flow

```text
        Login Request
Client -----------------> Server

        JWT Token
Client <----------------- Server

Request + JWT
Client -----------------> Server

Verify JWT

If Valid
    ↓
Return Protected Data

If Invalid
    ↓
Return Unauthorized
```

 now we are gonna hav two types of routes public one and private one 

 # genral concept 
 jwt is just a way to exchange data between 2 parties ex for such parties is a  front-end app and our api it has a security feature thats why we use this , http is stateless 

 - now he explains the whole process 

 