import React from 'react'


const PreventionBanner = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
  {/* Background IMAGE */}
  <img
    src="https://scd.infomigrants.net/media/resize/my_image_big/7786725ae3cb231cc67cc1e59af6f1bc73478c4a.jpg"
    alt="Prévention migration"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

  {/* Text content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Prévenir la Migration Clandestine
    </h1>
    <p className="text-lg md:text-xl max-w-2xl">
      Aider nous à stopper les départs clandestins en faisant votre prévention auprès des entités compétentes et gagnez une récompense.
    </p>
  </div>
</div>

  )
    
}

export default PreventionBanner