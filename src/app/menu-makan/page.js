'use client'
import { UseProfile } from "../components/UseProfile";
import UserTabs from "../components/layout/UserTabs.js";
import Link from "next/link";
import Right from "../components/layout/icons/Right.js";

export default function MenuItemsPage(){
    const {loading, data} = UseProfile()

    if (loading){
        return 'Loading...'
    }

    if (!data.admin){
        return 'Bukan admin'
    }
    return (
       <section className="mt-8 max-w-md mx-auto">
        <UserTabs isAdmin={true}/>
        <div className="mt-4">
        <Link className="button flex" href="/menu-makan/new"><span>Buat menu makan baru</span><Right></Right></Link>
        </div>
       </section>
    )
}