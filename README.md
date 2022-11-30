# Simple HTTP Server :

We can visit the following URL's:

1. localhost:{port}friends
2. localhost:{port}/messages
3. localhost:{port}/friends/id (where id is between 0 to 4)

(In this case , port is 3000 so URL would be like 'localhost:3000/friends')

## Post Request to add a Friend :

We can also add a friend to the list by going to the first URL and typing the followig command in the console , in developer options . 

fetch('http://localhost:3000/friends', {
    method : 'POST',
    body : JSON.stringify({ id : 5 , name : 'Vishal Singh'})
})
.then((response) => response.json())
.then((friend) => console.log(friend));

(Here you can replace the name by your friend's name)

You can check the new list by refreshing the page .