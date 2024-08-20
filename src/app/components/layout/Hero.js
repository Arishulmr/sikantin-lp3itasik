import Image from "next/image";
import Right from "./icons/Right";

export default function Hero(){
    return(
        
        <section className='grid py-4' style={{gridTemplateColumns: '.4fr .6fr'}}>
            <div className='py-12'>
                <h1 className='text-4xl font-semibold '>
                    Pesan makanan Anda dari Kantin <span className='text-primary'>LP3I</span> Tasikmalaya
                </h1>
                <p className='my-6 text-gray-500 text-sm'>
                    Pilih dari menu yang enak untuk mengisi perut Anda!
                </p>
            
                <div className="flex gap-4 text-sm">
                <button className=" bg-primary uppercase flex gap-2 text-white px-4 py-2 rounded-full items-center">
                    Pesan Sekarang
                    <Right/>
                    </button>
                <button className="flex gap-2  py-2 text-gray-600 font-semibold items-center">
                    Cara Memesan
                    <Right/>
                    </button>
                </div>
            </div>

            <div className='relative'>
                <Image src={"/nasi-to-tutug-oncom-nikmat-khas-tasikmalaya-foto-resep-utama.jpg"} layout={'fill'} objectFit={'contain'} alt={"alt"}  />
            </div>
        </section>
        
    )

}