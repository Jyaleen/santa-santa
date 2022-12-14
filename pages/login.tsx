import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage: NextPage = () => {
    const { data: session } = useSession()
    const router = useRouter()

    // useEffect(() => {
    //     if (session?.data?.user?.name) {
    //         router.push("/")
    //     }
    // }, [session, router])

    if (session) {
        return (
            <div>
                <button onClick={() => signOut()}>Logout</button>
            </div>)
    }
    return (
        <div>
            <button onClick={() => signIn()}>Login</button>
        </div>
    )
}

export default LoginPage