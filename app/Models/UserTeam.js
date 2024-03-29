'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserTeam extends Model {
  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  roles () {
    return this.belongsToMany('Adonis/Acl/Role')
  }

  permissions () {
    return this.belongsToMany('Adonis/Acl/Permission')
  }

  user () {
    return this.belongsTo('App/Model/User')
  }
}

module.exports = UserTeam
