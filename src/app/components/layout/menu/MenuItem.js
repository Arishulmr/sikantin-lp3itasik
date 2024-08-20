export default function MenuItem () {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/75 transition-all ">
                    <div className='text-center '>
                        <img src="/hq720.jpg" alt="" className='max-h-auto max-h-24 block mx-auto'/>
                    </div>
                    <h4 className="font-semibold my-3 text-xl">Chicken Katsu</h4>
                    <p className="text-gray-500 text-sm">Laboris consequat nostrud tempor non aliqua sit in aliquip ipsum laborum.</p>
                    <button type="" className="mt-4  bg-primary text-white rounded-full px-8 py-2">
                        Pesan Rp. 15.000
                    </button>
                </div>
    )
}