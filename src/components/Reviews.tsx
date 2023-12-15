import { MdCake } from 'react-icons/md';

const reviews = [
  {
    name: 'Amy Winehouse',
    description:
      '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis."',
    image:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Jordan Wing',
    description:
      '"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Chase Musk',
    description:
      '"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."',
    image:
      'https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default function Example() {
  return (
    <div className="pb-20">
      <h1 className="text-center font-bold text-3xl p-2">
        What our customers have to say
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 p-10 justify-items-center">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex flex-col justify-center items-center text-center my-2">
            <div>{review.description}</div>
            <div className="flex items-center space-x-4 mt-4 justify-center">
              <img
                src={review.image}
                alt=""
                className="h-20 w-20 rounded-full object-cover"
              />
              <p className="font-semibold text-gray-900">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
