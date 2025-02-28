import { NextResponse } from "next/server";
import { Connect } from "../../DBconnection/dbconnection";

export const POST = async (req) => {
    try {
        const { Data } = await req.json();
        const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
        const values = [Data.email, Data.password];
        const Users = await Connect.query(query, values);

        if (Users.rows.length > 0) {
            return NextResponse.json({ Users: Users.rows, Success: true, Message: "User Logged In Successfully" });
        } else {
            return NextResponse.json({ Success: false, Message: "User Not Authorized" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}