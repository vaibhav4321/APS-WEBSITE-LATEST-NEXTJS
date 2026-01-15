const logos = [
  { image: "/logos/logo-1.png", width: "w-[150px]" },
  { image: "/logos/logo-2.png", width: "w-[150px]" },
  { image: "/logos/logo-3.png", width: "w-[150px]" },
  { image: "/logos/logo-4.png", width: "w-[150px]" },
  { image: "/logos/logo-5.png", width: "w-[150px]" },
  { image: "/logos/logo-6.png", width: "w-[150px]" },
];

export const LogoSection = () => {
  return (
    <section className="border-border bg-background py-12 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll w-max">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 shrink-0">
              {logos.map((logo, index) => (
                <div
                  key={`${index}-${i}`}
                  className={`${logo.width} shrink-0 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                >
                  <img
                    src={logo.image}
                    alt="Brand logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
