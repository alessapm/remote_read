db.database generated tables: 

  CREATE TABLE "Books" (
    "id" serial NOT NULL,
    "title" varchar(255) NOT NULL,
    "author" varchar(255) NOT NULL,
    "url" TEXT(255) NOT NULL,
    "description" varchar(255) NOT NULL,
    "rating" integer(1) NOT NULL,
    CONSTRAINT Books_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Comments" (
    "id" serial NOT NULL,
    "book" varchar(255) NOT NULL,
    "user" varchar(255) NOT NULL,
    "rating" integer(1) NOT NULL,
    "review" varchar(500) NOT NULL,
    CONSTRAINT Comments_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Users" (
    "id" serial NOT NULL,
    "username" varchar(50) NOT NULL,
    CONSTRAINT Users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

