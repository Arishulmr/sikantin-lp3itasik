'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserTabs from "../components/layout/UserTabs.js";

export default function ProfilePage() {
    const session = useSession();
    console.log(session)
    const [userName, setUserName] = useState('');
    const [saved, setSaved] = useState(false);
    const {status} = session;
    const [isSaving, setIsSaving] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [user, setUser] = useState(null)
    const [profileFetched, setProfileFetched] = useState(false)

    useEffect(() => {
        if (status === 'authenticated'){
            
                setUserName(session.data.user.name);
                
                fetch('/api/profile').then(response => {
                    response.json().then(data => {
                        setProfileFetched(true)
                        setIsAdmin(data.admin)
                    })
                })
            
            
        }
    }, [session, status]);

    async function handleProfileInfoUpdate(ev){
        ev.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name:userName}),
            })
            if (response.ok) {
                resolve();
            } else {
                reject();
            }
        })
        await toast.promise(savingPromise, {
            loading: 'Menyimpan...',
            success: 'Profil berhasil disimpan!',
            error: 'Gagal menyimpan profil!',
        })

        }
      
       
    
    
    

    if (status === 'loading' || !profileFetched){
        return "Loading...";
    }

if (status === 'unauthenticated'){
    return redirect ('/loginpage')
}
    return (
        <section className="mt-8">
           <UserTabs isAdmin={isAdmin} />
            <div className="max-w-sm mx-auto mt-8">
                {saved && (
                    <h2 className="text-center bg-green-100 p-4 rounded-lg border-4 border-green-300">
                        Profil telah berhasil disimpan!
                    </h2>
                )}
                {isSaving && (
                    <h2 className="text-center bg-blue-100 p-4 rounded-lg border-4 border-blue-300">
                    Sedang menyimpan...
                </h2>
                )}
                    
            <form className="grow" onSubmit={handleProfileInfoUpdate}>
                <h2 className="text-primary font-semibold mx-1">Nama Panggilan</h2>
               <input type="text" value={userName} onChange={ev => setUserName(ev.target.value)} placeholder="Nama panggilan"/>
               <h2 className="text-primary font-semibold mx-1">NIM</h2>
               <input
                type="text"
                placeholder="NIM" 
                value={session.data.user.email} disabled
               />
               <button type="submit" className="">Simpan</button>
            </form>
            </div>
        </section>
    )
}