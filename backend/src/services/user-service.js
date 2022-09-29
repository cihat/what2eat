const BaseService = require('./base-service')
const User = require('../models/user')

class UserService extends BaseService {
  async findUsers(query) {
    const users = await this.load(query)

    return users
  }

  async createUser(user) {
    const newUser = await this.insert(user)

    return newUser
  }

  async findUser(id) {
    const user = await this.findById(id)

    return user
  }

  async updateUser(id, user) {
    const updatedUser = await this.update(id, user)

    return updatedUser
  }

  async deleteUser(id) {
    const deletedUser = await this.findByIdAndDelete(id)

    return deletedUser
  }
}

module.exports = new UserService(User)
