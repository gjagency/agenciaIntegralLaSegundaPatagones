export default function Beneficios() {
    return (
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl text-center font-bold mb-10">
          ¿Por qué elegir nuestros planes?
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-3">Red médica nacional</h3>
            <p>Cobertura en todo el país con acceso a especialistas.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-3">Planes flexibles</h3>
            <p>Opciones para particulares, familias y empresas.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-3">Asesoramiento personalizado</h3>
            <p>Te acompañamos en cada paso de tu elección.</p>
          </div>
        </div>
      </section>
    );
  }
  