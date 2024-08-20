
import Hero from "./components/layout/Hero.js"
import HomeMenu from "./components/layout/HomeMenu.js"
import SectionHeaders from "./components/layout/SectionHeaders.js"

export default function Home() {
  return (
    <>
    
    <main className='flex-1'>
      <Hero  className=''/>
      <HomeMenu  className=''/>
      <section className="text-center my-16 ">
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About Us'}/>
          <div className='max-w-2xl mx-auto text-gray-500 mt-4 flex flex-col gap-4'>
            <p className="">
              Anim eiusmod elit excepteur deserunt duis in sint cillum pariatur Lorem ullamco sit sunt. Veniam adipisicing excepteur incididunt est exercitation incididunt. Tempor eiusmod sit nulla ullamco. Adipisicing cillum non adipisicing aliqua minim nulla. Aute dolor Lorem pariatur exercitation exercitation ea ex. Ullamco fugiat aute non exercitation in commodo magna sunt consequat.
            </p>
            <p className="">
              Et deserunt nisi aute non anim anim deserunt sunt mollit ullamco in deserunt officia. Qui culpa velit eu labore adipisicing velit dolore occaecat. Amet excepteur tempor ad anim ut.
            </p>
            <p className="">
              Est ex Lorem nisi esse esse laboris sit laborum dolore. Incididunt magna eiusmod reprehenderit Lorem. Dolore labore consequat est in.
            </p>
          </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact Us'}
        />
        <div className='mt-8'>
          <a href="tel:+6282316639397" className="text-4xl underline text-gray-500">
            +62 823 1663 9397
          </a>
        </div>
      </section>
    </main>


</>

  )
}
