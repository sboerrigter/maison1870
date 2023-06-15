import Wrap from "@/components/Wrap";

export default function Amenities() {
  const amenities = [
    "High-speed WiFi access",
    "TV with chromecast",
    "Kitchen with cooker &amp; fridge",
    "Kitchen utensils &amp; tableware",
    "Nespresso coffee machine",
    "Weber barbeque (on request)",
    "Queen size boxspring bed",
    "Baby bed (on request)",
    "Clean bed sheets &amp; towels",
    "Rain shower",
    "Shower gel &amp; shampoo",
    "Hair dryer",
    "Free parking",
    "Shared garden with great views",
    "Board games &amp; pétanque",
    "Smoke- &amp; CO alarm",
    "First aid kit &amp; fire extinguisher",
    "Miss anything? Just <a href='mailto:bonjour@maison1870.com'>let us know</a>!",
  ];

  return (
    <Wrap className="content max-w-[1280px] my-section">
      <div className="bg-white w-full rounded-lg shadow-lg px-5 py-8 xs:p-10 xl:p-15 xl:pt-12">
        <h3 className="mb-8 xs:mb-10 text-center">
          We have everything you&apos;ll need
        </h3>

        <ul className="md:columns-2 lg:columns-3 gap-10 xl:gap-15">
          {amenities.map((amenity, index) => (
            <li
              className="border-t border-b -mt-px p-4 leading-tight"
              key={index}
              dangerouslySetInnerHTML={{ __html: amenity }}
            />
          ))}
        </ul>
      </div>
    </Wrap>
  );
}
