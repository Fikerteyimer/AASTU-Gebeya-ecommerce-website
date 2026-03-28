import Card from "./Card";
import Button from "./Button";

function Cards({ items }) {
  return (
    <section className="w-full bg-blue-900 py-3 px-6 md:px-20 my-60">
      <div className="grid md:grid-cols-2  items-center gap-50 max-w-7xl mx-auto">
        <div className="flex-1 space-y-6 text-center md:text-left text-white">
          <h1 className="text-3xl md:text-5xl font-bold">
            Ready to transform your{" "}
            <span className="text-blue-300">campus life?</span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg">
            Join a smart marketplace built for students. Buy, sell, and explore
            campus products with ease and security.
          </p>

          <Button
            text="Get Started Now"
            className="bg-white text-blue-900 hover:bg-gray-200"
          />
        </div>
        <div className="flex-1 w-full">
          <Card items={items} className="grid-cols-1" />
        </div>

      </div>
    </section>
  );
}

export default Cards;