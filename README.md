# DENAMO - A Deno Web Boilerplate

<div align='center'>

[![denamo](/public/header.jpg)](.)

</div>

![release](https://badgen.net/github/release/burhanahmeed/denamo)
![tags](https://badgen.net/github/tags/burhanahmeed/denamo)
![deno](https://badgen.net/badge/Deno/Latest/green)
![license](https://badgen.net/github/license/burhanahmeed/Denamo)
![stars](https://badgen.net/github/stars/burhanahmeed/Denamo)


#### What to do next: 
- Database integration (MySQL, Firebase, Redis, etc)
- Still waiting on Deno Frontend update tho
- Add dynamic rendering (Waiting someone make a deno headless browser module)

#### Related links
- [Attain](https://deno.land/x/attain) - A middleware web framework for Deno
- [MongoDB Driver](https://deno.land/x/mongo) - Unofficial driver
- [Denon](https://deno.land/x/denon) - Nodemon for Deno
- [Deno](https://deno.land)

## About
Denamo is just a simple web boilerplate / web starter to create your first Deno REST API. It's built on top of [Attain web framework](https://deno.land/x/attain) and been integrated with MongoDB.
As it written in 24 May 2020, the library is still very unstable and please submit an issue if you find some weird behaviors or some bugs.


## Installation & Setup
For the first step before you get started with this project, make sure you have Deno installed on your machine.

Simply just clone our biolerplate to your desired directory.
```
git clone https://github.com/burhanahmeed/Denamo.git
```
Then you can rename the directory name or just simply use Denamo. The next step, go to your root project directory.
```
cd Denamo
```

#### Connect to MongoDB
Before you can run this project, you need to setup a mongoDB and get it connected with Denamo.
Create an `.env` file and put your database credentials into it. Simply just copy it from `.env.example`.

##### .env.example
```
BASE_URL=http://localhost:3500

MONGO_PRIMARY_URL=mongodb://127.0.0.1/
MONGO_PRIMARY_DATABASE=Testing
```
So you can run this project right away.

Use this command.
```
deno run --allow-net --allow-env --allow-read --allow-write --allow-plugin --unstable main.ts
```
Too long though?

#### Solution
- You can use a Nodemon like library for Deno. It is called Denon. First you need to install it. [Denon](https://deno.land/x/denon).
- After you install it, you can use this command.
```
denon start
```
- If you wanna look at the denon setup file, it is on `.denon` file.



## Contribution
If you feel you can help us to improve this project, do not hesitate to submit an issue or just simply submit your pull request.


## License
MIT License

Copyright (c) 2020 Burhanuddin Ahmed
