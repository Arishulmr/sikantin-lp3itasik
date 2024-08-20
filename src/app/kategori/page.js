'use client'
import { useEffect, useState } from "react";
import UserTabs from "../components/layout/UserTabs.js";
import {UseProfile} from "../components/UseProfile.js"
import toast from "react-hot-toast";
export default function KategoriPage(){
   const {loading:profileLoading , data:profileData} = UseProfile()
   const [categoryName, setCategoryName] = useState('')
   const [categories, setCategories] = useState([])
   const [editedCategory, setEditedCategory] = useState(null)

useEffect(() => {
    fetchCategories();
}, []);

function fetchCategories(){
    fetch('/api/categories').then(res => {
        res.json().then(categories => {
            setCategories(categories);
        });
    });
}

  async function handleCategorySubmit(ev){
    ev.preventDefault();
    const creationPromise = new Promise(async(resolve, reject) => {
        const data = {name:categoryName};
        if (editedCategory){
            data._id = editedCategory._id;
        }
        const response = await fetch('/api/categories', {
            method: editedCategory ? 'PUT' : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
       });
       setCategoryName('');
       fetchCategories();
       setEditedCategory(null);
       if (response.ok)
           resolve();
        else 
           reject();
       
    })
    await toast.promise(creationPromise, {
        loading: editedCategory ? 'Sedang update kategori...' : 'Sedang membuat kategori baru...',
        success: editedCategory ? 'Kategori telah di-update' : 'Kategori berhasil dibuat',
        error: 'Gagal membuat kategori baru'
    })
   }

if (profileLoading){
    return 'Loading...'
}

if (!profileData.admin){
    return 'Bukan admin.'
}

    return(
        <section className="mt-8 max-w-md mx-auto">
            <UserTabs isAdmin={true}/>
            <form className="mt-8" onSubmit={handleCategorySubmit}>
                <div className="flex gap-2 items-end">
                    <div className="grow">
                <label>
                    {editedCategory ? 'Update kategori' : 'Nama kategori baru'} 
                    {editedCategory && (
                        <>: <b>{editedCategory.name}</b></>
                    )}
                </label>
                <input
                        type="text"
                        value={categoryName}
                        onChange={ev => setCategoryName(ev.target.value)}
                    />
                    </div>
                    <div className="pb-2">
                        <button
                        type="submit" 
                        className="border-primary border">
                            {editedCategory ? 'Update' : 'Buat'}
                            </button>
                    </div>
                    </div>
            </form>
            <div className="grow">
            <h2 className="mt-8 text-sm text-gray-500">Kategori</h2>
        {categories?.length > 0 && categories.map(c => (
          <div
            key={c._id}
            className="bg-gray-100 rounded-xl p-2 px-4 flex gap-1 mb-1 items-center">
            <div className="grow">
              {c.name}
            </div>
            <div className="flex gap-1">
              <button type="button"
                      onClick={() => {
                        setEditedCategory(c);
                        setCategoryName(c.name);
                      }}
              >
                Ubah
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}