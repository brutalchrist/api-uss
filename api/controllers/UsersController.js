/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    /**
     * @api {get} /users Users information
     * @apiVersion 1.0.0
     * @apiName GetUsers
     * @apiGroup Users
     * 
     * @apiSuccess {Array[]} user
     * @apiSuccess {String} user.id User ID.
     * @apiSuccess {String} user.name User name.
     * @apiSuccess {Number} user.birthdate Birth date.
     * @apiSuccess {Number} user.createdAt Date create User.
     * @apiSuccess {Number} user.updatedAt Date update User.
     */

     /**
     * @api {get} /users/:id User information
     * @apiVersion 1.0.0
     * @apiName GetUser
     * @apiGroup Users
     * 
     * @apiParam {string} id User ID.
     * 
     * @apiSuccess {String} id User ID.
     * @apiSuccess {String} name User name.
     * @apiSuccess {Number} birthdate Birth date.
     * @apiSuccess {Number} createdAt Date create User.
     * @apiSuccess {Number} updatedAt Date update User.
     */
};

