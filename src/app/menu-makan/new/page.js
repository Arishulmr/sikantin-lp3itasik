'use client'
import { UseProfile } from "../../components/UseProfile";
import UserTabs from "../../components/layout/UserTabs.js";
import EditableImage from "../../components/layout/EditableImage.js"
import { useState } from "react";
import Link from "next/link";
import Right from "../../components/layout/icons/Right.js";
import { redirect } from "next/navigation"
import toast from "react-hot-toast";

export default function NewMenuItemPage(){
    const [image, setImage] = useState('')
 
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [baseprice, setBaseprice] = useState('');
    const [redirectToItems, setRedirectToItems] = useState(false)

async function handleFormSubmit(ev){
    ev.preventDefault();
    const data = {image, name, description, baseprice}
    const savingPromise = new Promise(async (resolve, reject) => {
        const response = await fetch('/api/menu-items', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
        if (response.ok)
            resolve();
        else
        reject();
    })

    await toast.promise(savingPromise, {
        loading: 'Sedang menyimpan',
        success: 'Menu item berhasil disimpan',
        error: 'Gagal menyimpan menu item'
    })
    setRedirectToItems(true)
}

if (redirectToItems){
    return redirect('/menu-makan');
}

    const {loading, data} = UseProfile()

    if(loading) {
        return 'Loading...'
    }
    if (!data.admin){
        return 'Bukan admin'
    }

    return (
        <section className="mt-8">
            <UserTabs isAdmin={true}/>
            <div className="p-4 max-w-md mx-auto">
        <Link className="button flex" href="/menu-makan"><span>Lihat semua menu</span><Right></Right></Link>
        </div>
            <form onSubmit={handleFormSubmit} className="mt-4 max-w-md mx-auto">
            
                <div className="grid items-start gap-4" style={{gridTemplateColumns: '.3fr .7fr'}}>
                    <div className="">
                        <EditableImage link={image} setLink={setImage}/>
                    </div>
                    <div className="grow">
                    <label for="">Nama</label>
                    <input type="text" value={name} onChange={ev => setName(ev.target.value)}/>
                    <label for="">Deskripsi</label>
                    <input type="text" value={description} onChange={ev => setDescription(ev.target.value)}/>
                    <label for="">Harga awal</label>
                    <input type="text" value={baseprice} onChange={ev => setBaseprice(ev.target.value)}/>
                    <button type="submit" className="">Simpan</button>
                    </div>
                    </div>
            </form>
        </section>
        
    )
}