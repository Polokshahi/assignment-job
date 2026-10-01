"use-client"



export default function Frame2() {
    return (

      <div className="w-full h-[202px] bg-[#ffffff] flex items-center justify-center px-6 overflow-hidden">
      <div className="w-full max-w-[1440px] h-full flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/hero-image/logowithIcon.png" 
          alt="Logoipsum Brands" 
          className="max-h-[90px] md:max-h-[120px] w-auto object-contain opacity-90" 
        />
      </div>
    </div>
       
    )
}