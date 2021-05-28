# Blog Posts API Medium

## Data:
Example of a post data JSON object:
```
 {
    "isPublished": true,
    "title": "Overcoming Bias in Recruiting to Create a Culture of Diversity & Inclusion",
    "author": 1,
    "timestamp": 1531522701000,
    "publishedDate": 1598775265079,
    "id": 1
}
```

## Project Specifications:
The model implementation is provided and read-only.


The task is to implement the REST service that exposes the /posts endpoint, which allows for managing the collection of blog posts in the following way:

- POST request to /posts:
    - creates a new blog post
    - expects a JSON blog post object without the id and without the publishedDate properties as the body payload. You can assume that the given object is always valid.
    - adds the given post object to the collection of blog posts and assigns a unique integer id to it. The first created post must have id 1, the second one 2, and so on.
    - if the isPublished property for a post payload object is true, sets the publishedDate to current system time in milliseconds before saving.
    - the response code is 201, and the response body is the created post object
 

- GET request to /posts:
    - return a collection of all posts
    - the response code is 200, and the response body is an array of all post objects ordered by their ids in increasing order
    - optionally accepts query parameters author and isPublished, for example /posts?author=1&isPublished=true. All these parameters are optional. In case they are present, only objects matching the parameters must be returned.
    - only the values `true` or `false` are valid for the isPublished query param. If any other value is passed in the request, it should be discarded and isPublished property must not be queried upon as the data type is Boolean.
 
- GET request to /posts/<id>:
    - returns a post with the given id
    - if the matching post exists, the response code is 200 and the response body is the matching post object
    - if there is no post with the given id in the collection, the response code is 404 with the response body having the text `ID not found`.
 

- DELETE,PUT, PATCH request to /posts/<id>:
    - the response code is 405 because the API does not allow deleting or modifying posts for any id value
 
You should complete the given project so that it passes all the test cases when running the provided unit tests. The project by default supports the use of the SQLite3 database.
## Environment 
- Node Version: ^12.18.2
- Default Port: 8000

**Read Only Files**
- `test/*`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```

