# Movie API
A simple API where you could use CRUD operations to create-read-update-delete movies from data.js

To create a movie use method:
*POST: http://localhost:3000/movie*
And send raw JSON, e.g.:

    {
        "title": "New Movie",
        "director": "New Director",
        "release_date": "2023-01-25"
    }
  
To read all movies in data.js:
*GET: http://localhost:3000/movie*

To read 1 movie in data.js:
*GET: http://localhost:3000/movie/1*

To update movie with specified id in data.js, specify id in path:
*PUT: http://localhost:3000/movie/1*

    {
        "title": "Everything Everywhere All at Once",
        "director": "Dan Kwan, Daniel Scheinert",
        "release_date": "2022-05-19"
    }
    
To delete movie with specified id in data.js, specify id in url:
*DELETE: http://localhost:3000/movie/1*
