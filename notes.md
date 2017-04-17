SQL query for selecting the average:

 SELECT AVG(comments.rating) AS rating FROM posts INNER JOIN comments ON post_id = posts.id WHERE posts.id = 11; 

UPDATE posts SET rating = AVG(comments.rating) FROM  posts INNER JOIN comments ON post_id = posts.id WHERE posts.id = 11;


 maybe don't need "AS rating" when you are assigning it to a variable?

 How do I make a SQL value a variable?



homepage wireframe: 
 https://wireframe.cc/dDJChz

forms wireframe (signup, login, new user, new group, NOT new book post):
 https://wireframe.cc/gAfqqJ

find groups wireframe:
https://wireframe.cc/UU4hB3

potential main colors: 
rgb(164,137,204)
rgb(154,0,180)
**rgb(212,122,234)
rgb(172,93,171)


