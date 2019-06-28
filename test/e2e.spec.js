/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const searchPage = 'http://localhost:8888';
// const moreInfo = 'http://localhost:8888/movie/';


describe('express / route ', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('/ route returns the correct status code', () => axios.get(searchPage)
    .then(response => expect(response.status === 200))
  );

  it('should have the correct page title', () =>
    nightmare
      .goto(searchPage)
      .evaluate(() => document.getElementById('appName').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  );

  it('should have search input', () => 
    nightmare
      .goto(searchPage)
      .evaluate(() => document.querySelector('body').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('input');
      })
  );

  it('should have button element', () => 
    nightmare
      .goto(searchPage)
      .evaluate(() => document.querySelector('body').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('button');
    })
  );

  // it('should search movie', () => 
  //   nightmare
  //     .goto(searchPage)
  //     .type('#searchInput', 'Avengers')
  //     .click('#searchButton')
  //     .wait(2000)
  //     .evaluate(() => document.get('#movieList'))
  //     .end()
  //     .then((list) => {
  //       expect(list).to.contain('Avenegers');
  //       done();
  //     })
  //     .catch((err) => console.log(err))
  // );

});
