'use strict'

const DATA = [
  { name: 'percy', color: 'orange', personality: 'fun' },
  { name: 'glendia', color: 'gray', personality: 'playful' },
  { name: 'sugar', color: 'black', personality: 'mean' }
]

exports.index = function(_, res) {
  res.status(200)
     .render('cats/index', { cats: DATA })
}

exports.show = function(req, res) {
  if (isNaN(req.params.id)) {
    res.status(400).send('invalid id format').end()
    return  
  }

  const id = parseInt(req.params.id);
  if (id <= 0) {
    res.status(422).send('cat is out of bounds').end()
    return  
  } else if (id > DATA.length) {
    res.status(404).send('cat not found').end()
    return  
  }

  const cat = DATA[id-1]
  res.status(200)
     .render('cats/show', { cat: cat })
}