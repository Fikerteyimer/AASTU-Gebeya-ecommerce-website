import Button from "./Button";

function Hero() {
  return (
    <section className="bg-blue-50  flex items-center justify-center px-20 my-15 min-h-screen">
      <div className=" md:max-w-3xl text-center space-y-6">

        <h1 className="text-3xl md:text-5xl font-bold text-blue-950">
          Campus Market Place,{" "}
          <span className="text-blue-900">All In One Place</span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Elevate your university experience with a curated digital flagship. 
          Effortlessly browse, buy, and sell exclusive campus gear, textbooks, 
          and local services.
        </p>

        
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-4 ">
          <Button 
            text="Shop Now" 
          />
          <Button 
            text="Start Selling" 
            className="bg-white text-blue-900 border border-blue-400 hover:bg-blue-50 "
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;