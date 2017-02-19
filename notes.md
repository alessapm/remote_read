SQL query for selecting the average:

 SELECT AVG(comments.rating) AS rating FROM posts INNER JOIN comments ON post_id = posts.id WHERE posts.id = 11; 

UPDATE posts SET rating = AVG(comments.rating) FROM  posts INNER JOIN comments ON post_id = posts.id WHERE posts.id = 11;


 maybe don't need "AS rating" when you are assigning it to a variable?

 How do I make a SQL value a variable?
