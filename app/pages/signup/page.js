import { signIn } from "@/app/auth"
import Signup_Form from "@/app/Components/Signup/page"
import { redirect } from "next/dist/server/api-utils"

export default function SignIn() {
    return (
        <>
        <div className="grid justify-center">
        <Signup_Form/>
        <form
            action={async () => {
                "use server"
                await signIn("github", { redirectTo: "/" })
            }}
        className="text-center">
            <button type="submit" className="text-white bg-black p-2">SignUp with GitHub</button>
        </form>
        </div>
        </>
    )
} 