import express from  "express"

const router =  express.Router()
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An Object message ok
*/
router.get("/",(req,res)=>{
    res.json({
        message :"ok"
    })
})

export default router