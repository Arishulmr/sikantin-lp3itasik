'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import {signOut} from "next-auth/react";

export default function Header(){
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  const userName = userData?.name || userData?.email;
  console.log(session, userData, userData?.name);


    
  
 
 
    return (
        <header className="sticky top-0 flex z-50 items-center justify-between bg-white p-3">
          <nav className="flex gap-4 items-center text-gray-500 font-semibold">
          <Link className=" text-primary font-semibold text-2xl uppercase"  href="/">SiKantin</Link>
            <Link href={'/'}>Beranda</Link>
            <Link href={''}>Menu</Link>
            <Link href={''}>Tentang</Link>
            <Link href={''}>Kontak</Link>
            </nav>
            <nav className="flex items-center text-gray-500 font-semibold">
              {status === 'authenticated' && (
                <>
                <Link href="/profile" className="mr-4 text-primary"> {userName}</Link>
                <button onClick={() => signOut()} className="bg-primary text-white rounded-full px-6 py-2">Keluar</button>
                
                </>
              )}
              {status !== 'authenticated' && (
                <>
                <Link href={'/registerpage'} className="text-primary py-2 rounded-md px-4">Daftar</Link>
                <Link href={'/loginpage'} className="bg-primary text-white rounded-full px-8 py-2">Masuk</Link>
                </>
              )}
              
            </nav>
            
          
       </header>
    )
  }
