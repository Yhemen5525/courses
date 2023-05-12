const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.use('/avatar', express.static('avatar'));

// Create users.js file if it does not exist
const filePath = './users.js';
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, 'module.exports = []');
}

const upload = multer({ dest: 'avatar/' });

app.use(cors());
app.use(bodyParser.json());



//Register 
//Register 
app.post('/register', upload.single('profile-image'), (req, res) => {
  const newUser = req.body;
  const users = require(filePath);

  req.body.chart = [];
console.log(req.body)
  
  // Check if user with the same email already exists
  const existingUser = users.find(user => user.email === newUser.email);
  if (existingUser) {
    res.status(409).json({
      message: 'Email already exists',
      success: false
    });
  } else {
    // Save file with new filename and extension
    const ext = path.extname(req.file.originalname);
    const newFilename = `${req.file.filename}${ext}`;
    fs.renameSync(`avatar/${req.file.filename}`, `avatar/${newFilename}`);

    // Add file path to newUser
    newUser.profile_image = `avatar/${newFilename}`;

    // Add new user to users array and save to file
    users.push(newUser);
    fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(users)}`);

    res.json({
      message: 'User registered successfully',
      success: true
    });
  }
});



// Handle POST requests to /login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = require(filePath);

  // Check if user with the same email exists
  const user = users.find(user => user.email === email);
  if (!user) {
    res.status(401).json({
      message: 'Email does not exist',
      success: false
    });
  } else if (user.password !== password) {
    res.status(401).json({
      message: 'Incorrect password',
      success: false
    });
  } else {
    res.json({
      message: 'Login successful',
      success: true,
      user
    });
  }
});

// Handle POST requests to /updateChart
app.post('/updateChart', (req, res) => {
  const { email, chart } = req.body;
  const users = require(filePath);

  // Find user with the same email
  const userIndex = users.findIndex(user => user.email === email);
  if (userIndex === -1) {
    res.status(404).json({
      message: 'User not found',
      success: false
    });
  } else {
    // Update user's chart with the new chart received
    users[userIndex].chart = chart;
    fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(users)}`);

    res.json({
      message: 'Chart updated successfully',
      success: true,
      user: users[userIndex]
    });
  }
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
