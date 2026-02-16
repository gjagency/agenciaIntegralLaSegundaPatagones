export default function Hero() {
  return (
    <section className="bg-cover bg-center h-screen text-white relative" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Tu salud, nuestra prioridad
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Cobertura médica integral para vos, tu familia y tu empresa.
        </p>
        <a
          href="#cotizar"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-xl rounded-lg font-semibold"
        >
          Cotizá ahora
        </a>
      </div>
    </section>
  );
}
