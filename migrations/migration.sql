-- DATABASE is called remote_read
BEGIN TRANSACTION;

DROP TABLE IF EXISTS subcomments;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS groups_users;
DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS users;




CREATE TABLE users
(id BIGSERIAL PRIMARY KEY,
first_name VARCHAR(255) NOT NULL,
username VARCHAR(25) NOT NULL UNIQUE,
email VARCHAR(255) NOT NULL UNIQUE,
password_digest VARCHAR(255) NOT NULL
);

CREATE TABLE groups
(id BIGSERIAL PRIMARY KEY,
group_name VARCHAR(255) NOT NULL UNIQUE,
group_description TEXT,
created_by INTEGER REFERENCES users(id)
);


CREATE TABLE groups_users
(id BIGSERIAL PRIMARY KEY,
group_id INTEGER REFERENCES groups(id),
user_id INTEGER REFERENCES users(id)
);

CREATE TABLE posts
(id BIGSERIAL PRIMARY KEY,
group_id INTEGER REFERENCES groups(id),
user_id INTEGER REFERENCES users(id),
title VARCHAR(255) NOT NULL,
author VARCHAR(255) NOT NULL,
img_url TEXT,
book_description TEXT,
rating INTEGER,
num_comments INTEGER DEFAULT 0
);

CREATE TABLE comments
(id BIGSERIAL PRIMARY KEY,
post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
user_id INTEGER REFERENCES users(id),
user_username VARCHAR(255) REFERENCES users(username),
rating INTEGER NOT NULL,
review TEXT,
likes INTEGER DEFAULT 0
);

CREATE TABLE subcomments
(id BIGSERIAL PRIMARY KEY,
comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
post_id INTEGER REFERENCES posts(id),
user_id INTEGER REFERENCES users(id),
user_username VARCHAR(255) REFERENCES users(username),
reply TEXT
);

COMMIT;
