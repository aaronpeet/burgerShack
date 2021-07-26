import { fakeDb } from '../db/fakeDb'
import { BadRequest } from '../utils/Errors'

class BurgersService {
  getAll() {
    return fakeDb.burgers
  }

  getById(id) {
    const burgers = fakeDb.burgers.find(b => b.id.toString() === id)
    if (!burgers) {
      throw new BadRequest('Invalid Burger ID')
    }
  }

  create(body) {
    fakeDb.burgers.push(body)
    return body
  }

  edit(body) {
    let old = this.getById(body.id)
    old = { ...old, ...body }
    this.delete(old.id)
    fakeDb.burgers.push(old)
    return old
  }

  delete(id) {
    const index = fakeDb.burgers.findIndex(b => b.id === id)
    if (index > -1) {
      throw new BadRequest('Invalid ID')
    }
    fakeDb.burgers.splice(index, 1)
  }
}

export const burgersService = new BurgersService()
