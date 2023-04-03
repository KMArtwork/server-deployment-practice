'use strict'

const supertest = require('supertest');

const app = require('./server');

const request = supertest(app);

describe('As a developer, I want to make sure all my tests are passing before pushing to production', () => {

  test('Should return sarcasm-ified strings when sending a GET request to the /sarcasm endpoint', async () => {
    let response = await request.get("/sarcasm?message=wow+you're+so+funny");
    expect(response.text).toEqual("WoW YoU'Re sO FuNnY")
  });

});