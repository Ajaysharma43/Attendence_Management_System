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
            <button type="submit" className="bg-black text-white uppercase p-2 rounded-sm transition-all duration-150 hover:bg-blue-600">SignUp with GitHub</button>
        </form>
        </div>
        </>
    )
} 