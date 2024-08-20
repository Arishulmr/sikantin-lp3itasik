'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function UserTabs({isAdmin}) {
    const path = usePathname();
    return (
    <div className="flex mx-auto justify-center gap-2 tabs">
    <Link 
    className={path === '/profile' ? 'active' : ''} 
    href="/profile" >
        Profil
        </Link>
    {isAdmin && (
        <>
        <Link 
        className={path === '/kategori' ? 'active' : ''} 
        href={"/kategori"}
        >Kategori
        </Link>
        <Link
        className={path === '/menu-makan'  ? 'active' : '' || path === '/menu-makan/new'  ? 'active' : ''} 
         href={"/menu-makan"}>
            Menu Makan
            </Link>
        <Link 
        className={path === '/users' ? 'active' : ''} 
        href={'/users'}>
            Users
            </Link>
        </>
    )}
</div>
    )
}