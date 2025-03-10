const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const authRoutes = require('./src/routes/authRoutes');
const port = process.env.PORT || 3001;


app.use(express.json());
app.use('/user', authRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

