import properties from "@/properties.json";

const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div key={property.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{property.title}</h2>
            <p className="text-gray-600">{property.description}</p>
            <p className="text-blue-500 mt-2">${property.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertiesPage;
