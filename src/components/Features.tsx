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

export default function Features() {
  return (
    <div className="mx-auto mb-32 grid max-w-7xl grid-cols-1 justify-items-center gap-10 bg-neutral-200 px-10 py-28 sm:grid-cols-3 ">
      {features.map((feature) => (
        <div
          key={feature.name}
          className="my-2 flex flex-col items-center justify-center text-center"
        >
          <div className="mb-2 h-5 w-5 text-pink-400">
            <feature.icon aria-hidden="true" />
          </div>
          <div className="text-lg font-semibold text-gray-900">
            {feature.name}
          </div>
          <div>{feature.description}</div>
        </div>
      ))}
    </div>
  );
}
