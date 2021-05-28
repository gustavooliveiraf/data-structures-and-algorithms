const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const BlogPosts = require('./models/posts');

return sequelize.authenticate()
    .then(result => {
        console.log(`SQLite successfully connected!`);
        return BlogPosts.sync();
    })
    .then(result => {
        console.log(`Blog Posts table created`);
        return result;
    })
    .catch(error => {
        console.error('Unable to connect to SQLite database:', error);
    })
