import { log } from "console";
import Image from "next/image";
import { auth } from "./auth";


export default async function Home() {
  const session = await auth()
  console.log(session);
  

  if(session?.user == null) return null
  return (
    <>
    <h1>{session.user.name}</h1>
    </>
  );
}
