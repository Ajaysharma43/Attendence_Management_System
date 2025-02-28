import { NextResponse } from "next/server"
import { Connect } from "../../DBconnection/dbconnection"

export const GET = async (req) => {
    const Data = await Connect.query(`
        SELECT * FROM users
        `)
    return NextResponse.json({ Data: Data.rows })
}

export const POST  = async(req) => {
    try
    {
        const {Data} = await req.json()
        await Connect.query(`
            INSERT INTO users(name , email , password)
            VALUES('${Data.name}' , '${Data.email}' , '${Data.password}')
            `)
            const Result = await Connect.query(`
                SELECT * from users
                `)
        return NextResponse.json({Result : Result.rows , Message : "User Created Successfully"})
    }
    catch(error)
    {
       return NextResponse.json({error : error})
    }
    
}