import { MdCake } from 'react-icons/md';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis.',
    icon: MdCake,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: MdCake,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: MdCake,
  },
];

export default function Example() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 p-10 justify-items-center bg-neutral-200">
      {features.map((feature) => (
        <div
          key={feature.name}
          className="flex flex-col justify-center items-center text-center my-2">
          <div className="h-5 w-5 text-indigo-600 mb-2">
            <feature.icon aria-hidden="true" />
          </div>
          <div className="font-semibold text-gray-900">{feature.name}</div>
          <div>{feature.description}</div>
        </div>
      ))}
    </div>
  );
}
