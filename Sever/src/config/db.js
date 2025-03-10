const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        });

        console.log("Kết nối đến database thành công");
        return connection;
    } catch (error) {
        console.log("Lỗi kết nối đến database", error);
    }
}

module.exports = connectDB;