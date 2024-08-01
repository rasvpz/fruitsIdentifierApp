# fruitsIdentifierApp

**RegiterUser-------------------------**
Method :POST
http://localhost:3000/users/signup
{
    "username": "rasvpz",
    "email":"rasvpz@gmail.com",
    "password":"123456"
}

**Add Fruits--------------------------**
Method :POST
API : http://localhost:3001/fruits
JSON : {
  "name": "Grape",
  "skinColor": "Red",
  "seeds": 1,
  "size": "Small"
}

**getAllFruits--------------------------**
Method : GET
http://localhost:3001/fruits

**idetifyFruits-------------------------**
Method :POST
http://localhost:3001/fruits/identify
JSON : {
  "skinColor": "",
  "seeds": 20,
  "size": ""
}
