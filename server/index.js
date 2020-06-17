const express = require('express');
const passport = require('passport');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port localhost:${PORT}`));