'use strict'

const request = require('request')
const baseUrl = 'http://localhost:8080'
const path = require('path')
require(path.resolve('server/server'))

// Just express server dependencies
const express = require('express')
const app = express()
const catController = require(path.resolve('server/controllers/cats-controller.js'))

app.set('view engine', 'ejs')
app.get('/cats', catController.index)
app.get('/cats/:id', catController.show)

const port = 8080;
app.listen(port, () => {
  console.log(`Listening to port: ${port}`)
})

describe("cats-resource", function() {
  describe("index", function() {
    it("should return status code 200", function(done) {
      request.get(`${baseUrl}/cats`, function(_, response) {
        expect(response.statusCode).toEqual(200);
        done()
      })
    })

    it("should receive expected output", function(done) {
      request.get(`${baseUrl}/cats`, function(_, response) {
        expect(response.body).toMatch('<b>3</b> cats found!');
        done()
      })
    })
  })

  describe("show", function() {
    it("should return percy", function(done) {
      request.get(`${baseUrl}/cats/1`, function(_, response) {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatch('<p>You found <b>percy</b>! Color is <b>orange</b> and is a <b>fun</b> cat!</p>')
        done()
      })
    })

    it("should return glendia", function(done) {
      request.get(`${baseUrl}/cats/2`, function(_, response) {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatch('<p>You found <b>glendia</b>! Color is <b>gray</b> and is a <b>playful</b> cat!</p>')
        done()
      })
    })

    it("should return sugar", function(done) {
      request.get(`${baseUrl}/cats/3`, function(_, response) {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatch('<p>You found <b>sugar</b>! Color is <b>black</b> and is a <b>mean</b> cat!</p>')
        done()
      })
    })

    it("should return invalid cat id if id is invalid", function(done) {
      request.get(`${baseUrl}/cats/asdasdasdasd`, function(_, response) {
        expect(response.statusCode).toEqual(400);
        expect(response.body).toEqual('invalid id format')
        done()
      })
    })

    it("should return out of bounds if id is negative", function(done) {
      request.get(`${baseUrl}/cats/-1`, function(_, response) {
        expect(response.statusCode).toEqual(422);
        expect(response.body).toEqual('cat is out of bounds')
        done()
      })
    })

    it("should return not found if id is not found", function(done) {
      request.get(`${baseUrl}/cats/4`, function(_, response) {
        expect(response.statusCode).toEqual(404);
        expect(response.body).toEqual('cat not found')
        done()
      })
    })
  })
})