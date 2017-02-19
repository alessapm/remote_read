-- DATABASE is called remote_read

DROP TABLE IF EXISTS subcomments;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;


CREATE TABLE posts
(id BIGSERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
author VARCHAR(255) NOT NULL,
img_url TEXT,
book_description TEXT,
rating INTEGER,
num_comments INTEGER DEFAULT 0);

CREATE TABLE comments
(id BIGSERIAL PRIMARY KEY,
post_id INTEGER REFERENCES posts(id),
username VARCHAR(255) NOT NULL,
rating INTEGER NOT NULL,
review VARCHAR(500),
likes INTEGER DEFAULT 0);

CREATE TABLE subcomments
(id BIGSERIAL PRIMARY KEY,
comment_id INTEGER REFERENCES comments(id),
post_id INTEGER REFERENCES posts(id),
username VARCHAR(255) NOT NULL,
reply VARCHAR(500));

-- CREATE TABLE users
-- (id BIGSERIAL PRIMARY KEY,
-- username VARCHAR(50));
