export default function Planes() {
    return (
      <section className="py-16 px-6">
        <h2 className="text-3xl text-center font-bold mb-10">
          Elegí tu tipo de plan
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 border rounded-lg shadow-md text-center">
            <h3 className="font-bold text-2xl mb-4">Individual</h3>
            <p className="mb-6">Plan ideal para una sola persona.</p>
            <a href="#cotizar" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
              Cotizar
            </a>
          </div>
          <div className="p-8 border rounded-lg shadow-lg text-center">
            <h3 className="font-bold text-2xl mb-4">Familiar</h3>
            <p className="mb-6">Pensado para tu familia completa.</p>
            <a href="#cotizar" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
              Cotizar
            </a>
          </div>
          <div className="p-8 border rounded-lg shadow-md text-center">
            <h3 className="font-bold text-2xl mb-4">Empresas</h3>
            <p className="mb-6">Planes con beneficios corporativos.</p>
            <a href="#cotizar" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
              Cotizar
            </a>
          </div>
        </div>
      </section>
    );
  }
  