# Bookstore_bakend
this is the backend for the Bookstore it is using Node Mongo and Express internally for all the CRUD operations.

# URL endpoints for Books---
<h2> endpoint for getting all books of </h2> (GET)
--- <b>https://successful-dog-ring.cyclic.app/api/books</b>
<br>
--- response {msg:"here is the list of all books",data}

<h2> endpoint for finding books of specific category </h2> (GET)
--- <b>https://successful-dog-ring.cyclic.app/api/books?category=fiction&author=robert</b>
<br>
--- response {msg:"here is the list of all books",data}


<h2> endpoint for finding a single book with a id </h2> (GET)
--- <b>https://successful-dog-ring.cyclic.app/api/books/${id}</b>
<br>
--- response {msg:"here is the list of all books",data}


<h2> endpoint for posting the book(authentication is required)</h2> (POST)
--- <b>https://successful-dog-ring.cyclic.app/api/books</b>
--- req body will have bookModel schema
<br>
<br>
--- {
    title: String,
    author: String,
    category: String,
    price: Number,
    quantity: Number
  }

<h2> endpoint for deleting the book(authentication is required)</h2> (DELETE)
--- <b>https://successful-dog-ring.cyclic.app/api/books</b>

<h2> endpoint for updating the book(authentication is required)</h2> (PUT/PATCH)
--- <b>https://successful-dog-ring.cyclic.app/api/books</b>


# URL endpoints for Users ----

<h2> endpoint for registering the user </h2> (POST)
--- <b>https://successful-dog-ring.cyclic.app/api/register</b>
--- req body will have userModel schema
<br>
<br>
--- {
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean
  }

<h2> endpoint for logging in the user </h2> (POST)
--- <b>https://successful-dog-ring.cyclic.app/api/login</b>
<br>
--- response {msg:"login succesfully",token}

