
var CAT_RESPONSES = [
  'meow',
  'purr',
  'meow meow',
  'meeeeeeeow',
  'mr eow',
  'woof',
  'meooow',
  'Human, you are mine!'
]

function getFedCatResponse(count) {
  var chosenIndex = count % CAT_RESPONSES.length
  return CAT_RESPONSES[chosenIndex]
}

if (module) {
  module.exports = getFedCatResponse
} else if (window) {
  window.getFedCatResponse = getFedCatResponse
}