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
- [mysql](https://www.npmjs.com/package/mysql): Version 2.18.1
- [nodemon](https://www.npmjs.com/package/nodemon): Version 2.0.19

<br/>

### Installation
---
Node should be already install.

If not install, check : https://nodejs.org/en/ 

Clone : 
```
$ git clone https://github.com/FlavF/MyBooks
```

or

installation without clone : 

```
$ cd ../path/to/the/file
$ npm init
$ npm install express --save
$ npm i mysql
$ npm i body-parser
$ npm i cors
$ npm i hbs
$ npm install --save-dev nodemon
$ npm i dotenv
//Create and Update your .env => look at Pages - Folders to Update for datas
//To start the app (don't forget to start mysql)
$ nodemon src/app.js
```

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
- [X]Test postman update/delete
- [X]Link to CSS
- [X]Get the list via table (Possibility to do it with ejs instead of hbs)
- [X]Protect database data to connect (.env)
- [X]Add category, list, kind to database in table
- [X]Add booklist, category, list, kind JSON files
- [ ] MVC
- [ ]Update/delete book
- [ ]Add/Update/Delete category, list, kind via a page
- [ ]Filter booklist via category list kind
- [ ]Possibilities to have many categories but 1 list 1 kind
- [ ]Possibility to download the list via excel table
- [ ]ID/Password to connect to yourbooklist
- [ ]Test with JEST or with new function Node.js V18
- [ ]English / French ?

<br/>

### FAQs




