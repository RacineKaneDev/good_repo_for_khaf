import React from 'react'

const Banner = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* YouTube video in background */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/K0q-uLO5OUI?autoplay=1&mute=1&loop=1&playlist=K0q-uLO5OUI&controls=0&showinfo=0&modestbranding=1&rel=0"
        title="Migration video"
        allow="autoplay; fullscreen"
        frameBorder="0"
      ></iframe>

      {/* Dark overlay (optional, for readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Prévenir la Migration Clandestine
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Ensemble, offrons des alternatives durables et locales à nos jeunes.
          Découvrez les opportunités de financement offertes par nos partenaires pour
          un avenir meilleur.
        </p>
         <input
          className="cursor-pointer border-none bg-white rounded-md py-4 w-[15rem] md:w-[33rem] outline-none text-black px-5"
          placeholder="chercher compagnies de financement par localité: ex: Dakar, Thiès..."
        />
      </div>
    </div>
  )
}

export default Banner