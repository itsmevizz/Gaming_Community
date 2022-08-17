/**
 * @swagger
 * /all/users:
 *  get:
 *          summary: This api is used for get all the users
 *          description: This api is used for get all the users
 *          responses:
 *              200:
 *                  description: Get all users
 *                  content:
 *                      application/json:
 *                              type: array
 *
 */

/**
 * @swagger
 * /all/community:
 *  get:
 *          summary: This api is used for get all the communities
 *          description: This api is used for get all the communities
 *          responses:
 *              200:
 *                  description: Get all communities
 *                  content:
 *                      application/json:
 *                              type: array
 */

/**
 * @swagger
 * /get/singleCommunityMessage:
 *  get:
 *          summary: This api is used for get the chat from a community
 *          description: This api is used for get chat from a community
 *          parameters:
 *              - in: query
 *                name: id
 *                schema:
 *                   type: alphanumeric
 *                   required: true
 *                description: Id of a community
 *          responses:
 *              200:
 *                  description: Get community chat
 *                  content:
 *                      application/json:
 *                              type: array
 *
 */

/**
 * @swagger
 *  components:
 *      schema:
 *          Siginup:
 *               type: object
 *               properties:
 *                      name:
 *                          description: UserName
 *                          type: string
 *                      email:
 *                          description: Email Id
 *                          type: string
 *                      password:
 *                          description: Email Id
 *                          type: string
 *                          format: password
 */

/**
 * @swagger
 * /signup:
 *  post:
 *      summary: This api is used to Signup
 *      description: For adding new users
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/Siginup'
 *      responses:
 *            200:
 *                 description: Added successfully
 *
 *
 */

/**
 * @swagger
 *  components:
 *      schema:
 *          Login:
 *               type: object
 *               properties:
 *                      email:
 *                          description: Email Id
 *                          type: string
 *                      password:
 *                          description: Email Id
 *                          type: string
 *                          format: password
 */


/**
 * @swagger
 *  /login:
 *  post:
 *      summary: This api is used to Login
 *      description: For login using Email and Password
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/Login'
 *      responses:
 *            200:
 *                 description: Login successfully
 *      
 */