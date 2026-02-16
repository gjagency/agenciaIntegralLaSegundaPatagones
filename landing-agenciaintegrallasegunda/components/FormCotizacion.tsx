export default function FormCotizacion() {
    return (
      <section id="cotizar" className="py-20 px-6 bg-gray-100">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Recibí tu Cotización
          </h2>
  
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="number"
              placeholder="Edad"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full p-3 border rounded-lg"
            />
            <select className="w-full p-3 border rounded-lg">
              <option>Individual</option>
              <option>Familiar</option>
              <option>Empresa</option>
            </select>
  
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Quiero asesoramiento gratuito
            </button>
          </form>
        </div>
      </section>
    );
  }
  