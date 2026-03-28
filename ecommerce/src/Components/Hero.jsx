import Button from "./Button";

function Hero({
  Image,
  text,
  text2,
  description,
  primaryBtn,
  secondaryBtn,
  className = "",
}) {
  return (
    <section
      className={`relative flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${Image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          {text}{" "}
          {text2 && <span className="text-blue-300">{text2}</span>}
        </h1>

        {description && (
          <p className="text-white/90 text-base md:text-lg">
            {description}
          </p>
        )}

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-4">
          {primaryBtn && <Button text={primaryBtn} />}
          {secondaryBtn && (
            <Button
              text={secondaryBtn}
              className="bg-white text-blue-700 hover:bg-blue-200"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;