"use client";
import { useState } from "react"
import Link from "next/link"
import Image from "next/link"
import { signIn} from "next-auth/react"

export default function RegisterPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false)
    async function handleFormSubmit(ev){
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
        const response = await fetch('/api/register', {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
    }
)
if (response.ok){
    setUserCreated(true);
}
else {
    setError(true);
    const errorData = await response.json();
    console.error(errorData);
}
    setCreatingUser(false);
}

    return(
        <section className=''>
                <h1 className="text-primary text-center text-4xl py-4 font-semibold ">
                    Register
                </h1>
                {userCreated && (
                    <div className="my-4 text-center">
                        User created. Now you can <Link href={'/loginpage'} className='underline'>login</Link>
                    </div>
                )} 
            <form className='block max-w-xs mx-auto ' onSubmit={handleFormSubmit}>
                <input type="text" name="email"  className="" placeholder="NIM" value={email}
                    disabled={creatingUser}
                    onChange={ev => setEmail(ev.target.value)}></input>
                <input type="password" name="password" placeholder="Password" value={password} 
                    disabled={creatingUser}
                    onChange={ev => setPassword(ev.target.value)}></input>
                <button type="submit" className="" disabled={creatingUser}>
                    Register
                </button>
                
       
            </form>
        </section>
    )
}