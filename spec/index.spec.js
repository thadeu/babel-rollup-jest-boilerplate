import Component from '../src'

describe('constructor()', () => {
  it('should return truthy', () => {
    const fsm = new Component()
    expect(fsm).toBeTruthy()
  })
})
