"use client";
import {useState} from "react";
import {signIn} from "next-auth/react";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev){
        ev.preventDefault();
        setLoginInProgress(true)
        
      await signIn('credentials', {email, password, callbackUrl: "/"});
       setLoginInProgress(false);
    }

    return(
        <section className=''>
                <h1 className="text-primary text-center text-4xl py-4 font-semibold ">Login</h1>
            <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
                <input type="text" name="email" value={email}  className="" placeholder="NIM" disabled={loginInProgress} onChange={ev => setEmail(ev.target.value)}></input>
                <input type="password" value={password} name="password" placeholder="Password" disabled={loginInProgress} onChange={ev => setPassword(ev.target.value)}></input>
                <button type="submit" className="" disabled={loginInProgress}>Login</button>
            </form>
        </section>
    )
}