import toast from "react-hot-toast";
import Image from 'next/image'

export default function EditableImage({link, setLink}) {

    async function handleFileChange(ev){
        const files = ev.target.files;
        if(files?.length === 1) {
            const data = new FormData;
            data.set('file', files[0]);
            
            const uploadPromise = fetch('/api/upload', {
                method: 'POST',
                body: data,
              }).then(response => {
                if (response.ok) {
                  return response.json().then(link => {
                    setLink(link);
                  })
                }
                throw new Error('Terjadi kesalahan.');
              });
        
              await toast.promise(uploadPromise, {
                loading: 'Mengunggah...',
                success: 'Unggahan selesai.',
                error: 'Unggahan error',
              });
            }
          }
        
    return (
        <>
        {link && (
            <Image src={link} width={250} height={250} className="rounded-lg w-full h-full mb-1" />
        )}
        {!link && (
            <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg">
                Tidak ada foto
            </div>
        )}
        <label>
            <input type="file" onChange={handleFileChange} className="hidden" />
            <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
                Edit
            </span>
        </label>
        </>
    )
}