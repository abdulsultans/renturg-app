const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const { name, email, phone, password, } = req.body
    
    let user =
      await User.findOne({
        email, password
      })

    if (!user) {
        user =
          await User.create({
            name, email, password, phone
          })
    }

    return res.json(user)
  }
}