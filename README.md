# react-recipe-backend

**R-Recipe-website** is one of my personal projects.This repository holds the code of it's backend which is a **RESTful API**.

<em> The frontend of this project can be found [here (React)](https://github.com/Tanju67/React-Recipe-frontend.git) </em>

<em> Visit complete live project [R-Recipe](https://r-recipe.onrender.com) </em>

### Contents

- [react-recipe-backend](#react-recipe-backend)
  - [Contents](#contents)
  - [Features:](#features)
  - [Tech used:](#tech-used)
  - [How to get the project:](#how-to-get-the-project)
    - [Using Git (recommended)](#using-git-recommended)
    - [Using manual download ZIP](#using-manual-download-zip)
  - [Setting up environments](#setting-up-environments)
  - [API endpoints:](#api-endpoints)
    - [_Indication_](#indication)
    - [Auth related](#auth-related)
    - [Recipe related](#recipe-related)

## Features:

- Users can create their profiles (token-based authentication)
- Users can add and delete recipe in his/her favorite recipe list.

## Tech used:

**Runtime environment**

- [x] Node.js

**Database**

- [x] MongoDB

## How to get the project:

#### Using Git (recommended)

1. Navigate & open CLI into the directory where you want to put this project & Clone this project using this command.

```bash
git clone https://github.com/Tanju67/React-Recipe-backend.git
```

#### Using manual download ZIP

1. Download repository
2. Extract the zip file, navigate into it & copy the folder to your desired directory

## Setting up environments

1.  Create the backend url in a .env file.

```
MONGO_URI=(your mongo uri)
JWT_SECRET= (create your key)
JWT_LIFETIME=(create your key)
PORT=(set your port number)
```

2.  Install NPM packages.

```
npm install
```

1.  Start the server .

```
npm start
```

## API endpoints:

#### _Indication_

- [x] **Authentication required**
- [ ] **Authentication not required**

### Auth related

- [ ] Resgister: `POST localhost:5000/api/v1/auth/register`
- [ ] Login: `POST localhost:5000/api/v1/auth/login`
- [x] Get current user: `GET localhost:5000/api/v1/auth/currentUser`

### Recipe related

- [x] Get all user recipes: `GET localhost:5000/api/v1/recipe`
- [x] Create recipe: `POST localhost:5000/api/v1/recipe`
- [x] Delete recipe: `DELETE localhost:5000/api/v1/recipe/:id`
