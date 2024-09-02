# Local Firebase Client

## Reasoning
Hey, i work at startup where they use serverless firebase cloud function. So it's hard to test the function locally because: 

- If you want to test onCall function, you have to change it to onRequest so you can call that via Postman or something. [Reference](https://stackoverflow.com/questions/51066434/firebase-cloud-functions-difference-between-onrequest-and-oncall)
- Use the existing frontend client (like modifying the function name or create a button that execute a function you want to test)
- Mock everything and test via spec file (i.e. with jest)
- Just rely on your instinct

## What's this thing do?

basically just express client that call the cloud function based on your request. 

For example

```
POST http://localhost:8000/call/someFunction
```

then it will called cloud function with the same name `someFunction` with params that you put in the request body

## Consideration
- To be save, this client only connect to local emulator. It's enforced by `connectFunctionsEmulator` and `connectAuthEmulator`. So should only affect local emulator

- If you want to call test or live environtment on cloud, just remove that function in their file (folder `firebase/`). But do it at your own risk

## What else?

### Sign up

Endpoint: `/signup`

Method: `POST`

Description: This endpoint allows you to create a new user for testing functions that require authentication.

Request Body:
```json
{
    "email": "example@example.com",
    "password": "password123"
}
```

Response: 
```
Firebase Auth UserCredential.user
```


Example Usage:
```
POST http://localhost:8000/signup
Content-Type: application/json

{
    "email": "example@example.com",
    "password": "password123"
}
```

### Login
Endpoint: `/login`

Method: `POST`

Description: This endpoint allows you to authenticate a user and obtain a Firebase Auth token.

Request Body:

Response:

Example Usage:

```json
{
    "email": "example@example.com",
    "password": "password123"
}
```

Response:
```
Firebase Auth UserCredential
```

Example Usage: 
```
POST http://localhost:8000/login
Content-Type: application/json

{
    "email": "example@example.com",
    "password": "password123"
}
```

### Call function
### Call function
Endpoint: `/call/{functionName}`

Method: `POST`

Description: This endpoint allows you to call a specific cloud function by providing the function name and request body.

Request:
- Path parameter:
    - `functionName` (string): The name of the cloud function to be called.
- Request Body: The data to be passed as input to the cloud function.

Response: The response data returned by the cloud function.

Example Usage:
```
POST http://localhost:8000/call/someFunction
Content-Type: application/json

{
        "param1": "value1",
        "param2": "value2"
}
```

Response:
```
{
        "result": "success"
        // Or any result depending on cloud function
}
```

Note: Before calling this endpoint, make sure to authenticate the user by calling the `/login` endpoint and obtaining a Firebase Auth token.
