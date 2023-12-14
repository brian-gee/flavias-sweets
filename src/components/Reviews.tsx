import { MdCake } from 'react-icons/md';

const reviews = [
  {
    name: 'Push to deploy.',
    description:
      '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis."',
    image:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'SSL certificates.',
    description:
      '"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Database backups.',
    description:
      '"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."',
    image:
      'https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default function Example() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 p-10 justify-items-center">
      <h1 className="font-bold text-gray-900 text-3xl text-center">
        What our customers are saying
      </h1>
      {reviews.map((review) => (
        <div
          key={review.name}
          className="flex flex-col justify-center items-center text-center my-2">
          <div>{review.description}</div>
          <div className="flex items-center space-x-4 mt-4 justify-center">
            <img
              src={review.image}
              alt=""
              className="h-24 w-24 rounded-full object-cover"
            />
            <p className="font-semibold text-gray-900">First Last</p>
          </div>
        </div>
      ))}
    </div>
  );
}
