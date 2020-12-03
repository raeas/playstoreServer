const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common')); // let's see what 'common' format looks like

const apps = (require('./playstore-data.js'))

app.get('/apps', (req, res) => {

  const { sort, genres= "" } = req.query;

  if(sort) {
    if (!['Rating', 'App'].includes(sort)) {
      return res
        .status(400)
        .send('Sort must be one of app name or rating')
    }
  }
  if(genres) {
    if(!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genres)) {
      return res  
        .status(400)
        .send('The only genres are Action, Puzzle, Strategy, Casual, Arcade, Card')
    }
  }

  let results= apps
    .filter(app => 
      app
      .Genres
      .includes(genres));

  if(sort === 'Rating') {
    results
      .sort((a, b) => {
        return a[sort] < b[sort] ? 1 : a[sort] > b[sort] ? -1 : 0;
      });
  }
  
  if(sort === 'App') {
    results
      .sort((a, b) => {
        return a[sort] < b[sort] ? -1 : a[sort] > b[sort] ? 1 : 0;
      });
  }

  res
    .json(results)

});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});

