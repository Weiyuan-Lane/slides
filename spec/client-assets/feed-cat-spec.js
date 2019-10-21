'use strict'

const path = require('path')
const getFedCatResponse = require(path.resolve('client-assets/feed-cat'))

// 'meow',
//   'purr',
//   'meow meow',
//   'meeeeeeeow',
//   'mr eow',
//   'woof',
//   'meooow',
//   'Human, you are mine!'


describe("feed-cat", function() {
  it("return response for first feed", function() {
    expect(getFedCatResponse(0)).toEqual('meow')
  })

  it("return response for second feed", function() {
    expect(getFedCatResponse(1)).toEqual('purr')
  })

  it("return response for third feed", function() {
    expect(getFedCatResponse(2)).toEqual('meow meow')
  })

  it("return response for fourth feed", function() {
    expect(getFedCatResponse(3)).toEqual('meeeeeeeow')
  })

  it("return response for fifth feed", function() {
    expect(getFedCatResponse(4)).toEqual('mr eow')
  })

  it("return response for sixth feed", function() {
    expect(getFedCatResponse(5)).toEqual('woof')
  })

  it("return response for seventh feed", function() {
    expect(getFedCatResponse(6)).toEqual('meooow')
  })

  it("return response for eigth feed", function() {
    expect(getFedCatResponse(7)).toEqual('Human, you are mine!')
  })

  it("return looped response for the ninth feed onwards", function() {
    expect(getFedCatResponse(8)).toEqual('meow')
  })
})