const game = require('./game')

test('test setup working', function () {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', function () {
  const frame = [0, 0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a normal frame', function () {
  const frame = [2, 3]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', function () {
  const frame = [6, 4]
  const nextFrame = [4, 3]
  const expected = 14
  const actual = game.spareFrame(nextFrame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', function () {
  const frame = [10, 0]
  const nextFrame = [3, 6]
  const expected = 19
  const actual = game.strikeFrame(nextFrame,[0,0])
  expect(actual).toBe(expected)
})

test('scores a double strike frame', function () {
  const frame = [10, 0]
  const nextFrame = [10, 0]
  const nextNextFrame = [9, 0]
  const expected = 29
  const actual = game.doubleStrikeFrame(nextNextFrame) //testing actual score of individual frame
  expect(actual).toBe(expected)
})

test('test all ones', function () {
  const frames = [[1, 1],[1, 1], [1, 1],[1, 1],[1, 1],[1, 1], [1, 1],[1, 1],[1, 1],[1, 1]]
  const expected =20
  const actual = game.scoreGame(frames)
  expect(actual).toBe(expected)
})

test('test single strike', function () {
  const frames = [[10, 0],[1, 1], [1, 1],[1, 1],[1, 1],[1, 1], [1, 1],[1, 1],[1, 1],[1, 1]]
  const expected = 30
  const actual = game.scoreGame(frames)
  expect(actual).toBe(expected)
})

test('test double strike', function () {
  const frames = [[10, 0],[10, 0], [1, 1],[1, 1],[1, 1],[1, 1], [1, 1],[1, 1],[1, 1],[1, 1]]
  const expected = 49
  const actual = game.scoreGame(frames)
  expect(actual).toBe(expected)
})

test('test perfect game', function () {
  const frames = [[10, 0],[10, 0], [10, 0],[10, 0],[10, 0],[10, 0], [10, 0],[10, 0],[10, 0],[10, 10, 10]]
  const expected = 300
  const actual = game.scoreGame(frames)
  expect(actual).toBe(expected)
})