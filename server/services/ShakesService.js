import { fakeDb } from '../db/fakeDb'
import { BadRequest } from '../utils/Errors'

class ShakesService {
  getAll() {
    return fakeDb.shakes
  }

  getById(id) {
    const shakes = fakeDb.shakes.find(s => s.id.toString() === id)
    if (!shakes) {
      throw new BadRequest('Invalid Shakes ID')
    }
  }

  create(body) {
    fakeDb.shakes.push(body)
    return body
  }

  edit(body) {
    let old = this.getById(body.id)
    old = { ...old, ...body }
    this.delete(old.id)
    fakeDb.shakes.push(old)
    return old
  }

  delete(id) {
    const index = fakeDb.shakes.findIndex(s => s.id === id)
    if (index > -1) {
      throw new BadRequest('Invalid ID')
    }
    fakeDb.shakes.splice(index, 1)
  }
}

export const shakesService = new ShakesService()
