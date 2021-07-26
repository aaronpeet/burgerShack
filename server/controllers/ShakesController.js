import { shakesService } from '../services/ShakesService'
import BaseController from '../utils/BaseController'

export class ShakesController extends BaseController {
  constructor() {
    super('api/shakes')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  getAll(req, res, next) {
    try {
      const shakes = shakesService.getAll()
      res.send(shakes)
    } catch (error) {
      next(error)
    }
  }

  getById(req, res, next) {
    try {
      const shakes = shakesService.getById(req.params.id)
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {
      const shakes = shakesService.create(req.body)
    } catch (error) {
      next(error)
    }
  }

  edit(req, res, next) {
    try {
      const shakes = shakesService.edit(req.body)
    } catch (error) {
      next(error)
    }
  }

  delete(req, res, next) {
    try {
      shakesService.delete(req.params.id)
      res.send('Deleted')
    } catch (error) {
      next(error)
    }
  }
}
