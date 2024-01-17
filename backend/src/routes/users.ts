import express,{Request,Response} from 'express'
import User from '../models/user'
import jwt from 'jsonwebtoken'
import  {check, validationResult} from 'express-validator'

const router = express.Router()

router.post("/register",[
    check("firstName","firstname is required").isString(),
    check("lastName","lastname is required").isString(),
    check("email","Email is required").isEmail(),
    check("password","password with 6 or more characters requird").isLength({min:6})
],async(req:Request, res:Response)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()})
    }
    try{
        let user = await User.findOne({
            email:req.body.email
        })
        if(user){
            return res.status(400).json({message:"User Already Exist"})
        }
        user = new User(req.body)
        await user.save()

        const token = jwt.sign({userId: user.id},process.env.JWT_SECRET_KEY as string,
            {
                expiresIn: "1d", //1 day can change if want
            }
        )
        res.cookie("auth_token", token,{
            httpOnly:true,
            secure: process.env.NODE_ENV==="production",
            maxAge: 86400000, //1 day in ms
        })
        return res.sendStatus(200)
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"})
    }
})

export default router