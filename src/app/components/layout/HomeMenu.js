import Image from "next/image";
import MenuItem from "./menu/MenuItem"
import SectionHeaders from "./SectionHeaders"

export default function HomeMenu() {
    return (
        <section className=''>
            <div className='absolute left-0 right-0 w-full'>
                <div className="absolute -top-24 -z-10">
                    <Image src={"/sallad1.png"} width={109} height={189} alt="alt" />
                </div>
                <div className="absolute right-0 -top-36 -z-10">
                    <Image src={"/sallad2.png"} width={107} height={195} alt="alt" />
                </div>
                </div>
                <div className='text-center py-4'>
                    <SectionHeaders
                    subHeader={'Check Out'}
                    mainHeader={'Menu'}/>
                </div>
            <div className="grid-cols-3 grid gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    );
}