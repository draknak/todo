-- Create a new database called 'todo'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'todo'
)
CREATE DATABASE todo
USE todo
GO

-- Create a new table called 'TableName' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('todo.tasks', 'U') IS NOT NULL
DROP TABLE todo.tasks
GO
-- Create the table in the specified schema
CREATE TABLE todo.tasks
(
    Id INT NOT NULL PRIMARY KEY, -- primary key column
    title [NVARCHAR](50) NOT NULL,
    description [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
GO

-- Insert rows into table 'tasks'
INSERT INTO tasks
( -- columns to insert data into
 [title], [description]
)
VALUES
( -- first row: values for the columns in the list above
 'Column2_Value', 'Column3_Value'
),
( -- second row: values for the columns in the list above
 'Column2_Value', 'Column3_Value'
)
-- add more rows here
GO