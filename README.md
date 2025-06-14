# 🧾 Items REST API

A simple and clean RESTful API built with **Node.js** and **Express.js** to manage a list of items. This API allows users to perform full **CRUD** operations (Create, Read, Update, Delete) on in-memory items.

---

## Features

- Add new items with auto-generated IDs
- View all items or a single item by ID
- Update existing items
- Delete items
- Built-in validation and meaningful error responses

---

## Technologies Used

- Node.js
- Express.js
- UUID (for generating unique IDs)
- JavaScript (ES Modules)

---

## 🚀 How to Run It

### 1. Clone the repository

```bash
git clone ttps://github.com/AhamefulaChibundu/Mini-Project-Nodejs-itemsAPI.git
```

### 2. Change directory to access files

```bash
cd Mini-Project-Nodejs-itemsAPI
```

### 3. Install dependences
```bash
npm install
```

### 4. Run server
```bash
node index.js
```

### 5. Open in browser 

Go to: [http://localhost:2000](http://localhost:2000)

also go to : [http://localhost:2000/items](http://localhost:2000/items)

These urls are using the get request. To test other endpoints, we need a tool like Postman.

### 6. Open Postman to test API  request

In postman, you'll see a part that says enter URL 
1. enter http://localhost:2000/items/ as your URL.
2. click on the button by the left to choose type of request. choose POST
3. Directly below that line, click on body.
In body enter:
```json
{
   "itemName": "Samsung",
    "Description": "fold 26",
    "Amount": "$789"
}
```
Click on Send

it should give a Success Response (201):
```json
{
    "message": "Item was added successfully",
    "item": {
        "itemName": "Samsung",
        "Description": "fold 26",
        "Amount": "$789",
        "id": "7c34a1da-2649-49ab-b02a-4ab125c9d1ec"
    }
}
```
Note that the id can be different for you because it generates random IDs.

Error Response (400):
``` json
{
    "message": "Invalid item data. "itemName" and "Description" is required and must be a non-empty string."
}
```

After testing POST, change to GET to test getting all items.
you do not need to add anything to the body, the url would still to be http://localhost:2000/items/. Click on Send.

Success Response(200):

```json
[
    {
        "itemName": "Samsung",
        "Description": "fold 26",
        "Amount": "$789",
        "id": "7c34a1da-2649-49ab-b02a-4ab125c9d1ec"
    }
]
```

Now let's test getting items by ID:

copy your generated ID and paste it alongside your url like this - 
http://localhost:2000/items/7c34a1da-2649-49ab-b02a-4ab125c9d1ec
still on GET request, click on Send

Success Response:

```json
[
    {
        "itemName": "Samsung",
        "Description": "fold 26",
        "Amount": "$789",
        "id": "7c34a1da-2649-49ab-b02a-4ab125c9d1ec"
    }
]
```
Let's say we missed out some characters while copying the id, like the last 3 characters in my id(1ec) and try a GET request by ID- http://localhost:2000/items/7c34a1da-2649-49ab-b02a-4ab125c9d
we would get an error response.

Error Response (404):
```json
{
    "message": "Item with ID 7c34a1da-2649-49ab-b02a-4ab125c9d not found"
}
```

Now, we test updating an item with PUT

Like the POST request, PUT also requires you to use the body and you also have to add the id of the item you want to update to the URL - http://localhost:2000/items/7c34a1da-2649-49ab-b02a-4ab125c9d1ec
make sure you change request to PUT and click Send

```json
{
   "itemName": "Samsung",
    "Description": "Galaxy S29",
    "Amount": "$889"
}
```

Success Response(200):
```json
{
    "message": "Item with ID 7c34a1da-2649-49ab-b02a-4ab125c9d1ec has been updated",
    "updatedItem": {
        "itemName": "Samsung",
        "Description": "Galaxy S29",
        "Amount": "$889",
        "id": "7c34a1da-2649-49ab-b02a-4ab125c9d1ec"
    }
}
```

Error Message(400/404):

```json
{
  "message": "Invalid update data." // or
  "message": "Item with ID 7c34a1da-2649-49ab-b02a-4ab125c9d not found."
}
```

Lastly, let's test the DELETE request with ID:
Change request to delete, and your URL should include ID of item you wish to delete-
http://localhost:2000/items/7c34a1da-2649-49ab-b02a-4ab125c9d1ec
CLick Send

Success Response:
```json
{
  "message": "Item with ID 7c34a1da-2649-49ab-b02a-4ab125c9d1ec has been deleted."
}
```

Error Response(404):
```json
{
  "message": "Item with ID abc123 not found."
}
``` 

