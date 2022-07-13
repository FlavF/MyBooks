# MyBooks (in progress)
## Table of Contents
1. [General Info](#general-info)
2. [Stacks](#stacks)
3. [Installation](#installation)
4. [Pages](#pages)
5. [Database](#database)
6. [Use](#use)
7. [TODO](#todo)
8. [FAQs](#faqs)

<br/>

### General Info
---
Have your own book list.

<br/>

### Stacks
---
- [Node.js](https://nodejs.org/en/): Version 18.2.0
- [Express](https://expressjs.com/): Version 4.16.1

Modules/librairies : 
- [body-parser](https://www.npmjs.com/package/body-parser): Version 1.20.0 
- [cors](https://www.npmjs.com/package/cors): Version 2.8.5
- [dotenv](https://www.npmjs.com/package/dotenv): Version 16.0.1
- [hbs](https://www.npmjs.com/package/hbs): Version 4.2.0 
=> To test hbs instead of ejs
- [nodemon](https://www.npmjs.com/package/nodemon): Version 2.0.19
- [sequelize-auto ](https://github.com/sequelize/sequelize-auto): Version 0.8.8

<br/>

### Installation
---
- Need Node.js

If not install, check : https://nodejs.org/en/

- Clone :

```
$ git clone https://github.com/FlavF/MyBooks
```

or

- Installation without clone :

```
$ cd ../path/to/the/file
$ npm init
$ npm install express --save
$ npm i body-parser
$ npm i cors
// view engine
$ npm i hbs
//to not restart your node.js src/index.js everytime your changing your code
$ npm install --save-dev nodemon  
//For .env
$ npm i dotenv
```
- Create and Update your .env => look at Pages - Folders to Update for datas

- To start the app and check it

(don't forget to start MySql if you use a localhost mysql)

```
$ nodemon src/app.js
```


- To install sequelize for mysql :
  [Sequelize](https://sequelize.org/docs/v6/getting-started/)

```
$ npm install sequelize mysql2
```

- To install models for a database already built :
  [Sequelize-Auto](https://github.com/sequelize/sequelize-auto)

```
$ npm install sequelize-auto
```

=> My laptop didn't like sequelize-auto :

```
$ sequelize-auto -o "./models" -d sequelize_auto_test -h localhost -u my_username -p 5432 -x my_password -e postgres
```

=> So I replace it with :
(replace databasename,user, password and path for models )

```
$ node ./node_modules/sequelize-auto/bin/sequelize-auto -o "src/models" -d databasename -h host -u user -p 3306 -x password -e mysql
```

Use : https://github.com/sequelize/sequelize-auto/issues/441 ?

<br/>

### Pages
---
HomePage : Authentification

Page 1 - Booklist : Book list via table and form
Update/Delete books

Page 2 - Add book : add a book via form

Page 3 - Parameters : Parameters via table and form



#### *Folders to update*
- .env : (/.env)

DB_HOST = your host

DB_USER = your user

DB_PASSWORD = yourpassword

DB_NAME = MyBooks

<br/>

### Database
---
![Image text](/ViewDatabase.png)

=> To update to link category, list and kind

Books : name,author,category,list,kind

category : Coding,Cookbooks,Fantasy,Fiction,HistoricalFiction,History,Mystery,Psychology,Romance,Science,ScienceFiction,Thriller,Travel,YoungAdult

list : create your own list (read, reading, to read, drop, on hold, to buy)

kind : kind of book (paperbook, ebook, graphic book, manga, bd)


<br/>

### Use
---
- add a book
- update or delete a book
- book list
- get the booklist via json

==> (To complete when updates)

<br/>

### TODO
---
- [X] Test postman update/delete
- [X] Link to CSS
- [X] Get the list via table (Possibility to do it with ejs instead of hbs)
- [X] Protect database data to connect (.env)
- [X] Add category, list, kind to database in table
- [X] Add booklist, category, list, kind JSON files
- [X] MVC
- [ ] CRUD books
- [ ] Database : links category, list, kind to books
- [ ] And retry CRUD books
- [ ] CRUD category, list, kind via a page 
- [ ] Filter booklist via category list kind
- [ ] Possibilities to have many categories but 1 list 1 kind
- [ ] Possibility to download the list via excel table 
- [ ] ID/Password to connect to yourbooklist
- [ ] Retry all the CRUD with connection
- [ ] Test with JEST or with new function Node.js V18 
- [ ] English / French ?
- [ ] Clean database to only have a app model
 
<br/>

### FAQs




