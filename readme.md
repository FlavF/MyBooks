# MyBooks (in progress)
Have your own book list

## Architecture / Pages
=> Node.js

Header (Nav):
Title : MyBooks
Page 1 : Booklist
Page 2 : Add book
Page 3 : Update/Delete books

HomePage : Authentification

Page 1 : Add book
add a book via form

Page 2 : Booklist
Book list via table and form

Page 3 : Parameters
Parameters via table and form

## Database contains
Books : name,author,category,list,kind

category : Coding,Cookbooks,Fantasy,Fiction,HistoricalFiction,History,Mystery,Psychology,Romance,Science,ScienceFiction,Thriller,Travel,YoungAdult

list : create your own list (read, reading, to read, drop, on hold, to buy)

kind : kind of book (paperbook, ebook, graphic book, manga, bd)

## To use
* add a book
* update or delete a book
* book list

==> (To complete when updates)

## TODO
- [X]Test postman update/delete
- [X]Link to CSS
- [X]Get the list via table (Possibility to do it with ejs instead of hbs)
- [X]Protect database data to connect (.env)
- [X]Add category, list, kind to database in table
- [ ]Update/delete book
- [ ]Add/Update/Delete category, list, kind via a page
- [ ]Filter booklist via category list kind
- [ ]Possibilities to have many categories but 1 list 1 kind
- [ ]Possibility to download the list via excel table
- [ ]ID/Password to connect to yourbooklist
- [ ]Test with JEST or with new function Node.js V18

