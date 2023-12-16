import { MdCake } from "react-icons/md";

const features = [
  {
    name: "Customizable Cake Creations",
    description:
      "Personalize your cake with our easy customization options. Perfect for any occasion and taste preference.",
    icon: MdCake,
  },
  {
    name: "User-Friendly Online Ordering System",
    description:
      "Effortless ordering with our straightforward online system. A hassle-free way to get your dream cake.",
    icon: MdCake,
  },
  {
    name: "Gallery of Inspirational Designs",
    description:
      "Explore our gallery for cake design inspiration. A showcase of our diverse and creative baking artistry.",
    icon: MdCake,
  },
];

export default function Example() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 py-28 px-10 justify-items-center bg-neutral-200 mb-32 ">
      {features.map((feature) => (
        <div
          key={feature.name}
          className="flex flex-col justify-center items-center text-center my-2"
        >
          <div className="h-5 w-5 text-pink-400 mb-2">
            <feature.icon aria-hidden="true" />
          </div>
          <div className="font-semibold text-lg text-gray-900">
            {feature.name}
          </div>
          <div>{feature.description}</div>
        </div>
      ))}
    </div>
  );
}
