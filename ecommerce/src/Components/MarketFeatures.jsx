import Card from "./Card";

function MarketFeatures({text,description,item}) {
  return (
    <section className="py-12 px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-950">
          {text}
        </h1>
        <hr className="border-t-4 border-blue-900 w-16 mt-4 mx-auto rounded" />
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
         {description}
        </p>
      </div>

      <div >
        <Card items={item} />
      </div>

    </section>
  );
}

export default MarketFeatures;