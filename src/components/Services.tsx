export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container fade-in">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-xl mb-2">
              Installation
            </h3>
            <p className="text-gray-600">
              Professional overhead door installation for homes and businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              Repair
            </h3>
            <p className="text-gray-600">
              Fast and reliable repair services for springs, motors, and tracks.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              Maintenance
            </h3>
            <p className="text-gray-600">
              Preventive maintenance to extend the life of your garage door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}