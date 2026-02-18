export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">

      <div className="flex gap-16">

        {/* CARD NEW YORK */}
    <div className="w-72 h-[600px] rounded-[40px] shadow-2xl overflow-hidden relative">

  {/* Imagen */}
  <img
    src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg"
    alt="New York"
    className="w-full h-full object-cover"
  />

  {/* Degradado fuerte desde abajo */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

  {/* Corazón */}
  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full z-10 text-white">
    ♡
  </div>

  {/* Contenido inferior */}
  <div className="absolute bottom-0 left-0 w-full p-6 z-10 text-white">

    <h2 className="text-3xl font-bold">New York</h2>
    <p className="text-gray-300 mb-4">Economy</p>

    <div className="flex gap-6 text-sm mb-6 text-gray-200">
      <span>from $120</span>
      <span>✈ JFK</span>
    </div>

    <button className="w-full bg-white text-black py-4 rounded-full font-medium shadow-lg">
      Search flight
    </button>

  </div>

</div>

        {/* CARD SAN FRANCISCO */}
        <div className="w-64 h-[520px] bg-white rounded-[40px] shadow-2xl p-4 flex flex-col">

          {/* Imagen */}
          <div className="rounded-[30px] overflow-hidden h-80">
            <img
              src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg"
              alt="San Francisco"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-6 flex-1">
            <h2 className="text-2xl font-bold">San Francisco</h2>
            <p className="text-gray-400 text-sm">Premium economy</p>

            <div className="flex justify-between text-sm text-gray-500 mt-3">
              <span>from $240</span>
              <span>SFO</span>
            </div>
          </div>

          {/* Botón + corazón */}
          <div className="flex items-center gap-3 mt-4">
            <button className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
              Search flight
            </button>

            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
              ♡
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}