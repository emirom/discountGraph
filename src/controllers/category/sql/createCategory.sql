  CREATE TABLE IF NOT EXISTS categories (
        id SERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(45) NOT NULL,
        parent_id INTEGER,
        discount INTEGER,
        graph_discount INTEGER
      );

