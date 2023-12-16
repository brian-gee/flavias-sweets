import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Amy Winehouse',
    description:
      "I ordered a custom birthday cake from here, and it was a hit! Not only was it visually stunning, but it tasted heavenly. Their attention to detail is remarkable, and the service was friendly and helpful. Can't wait to order again for our next celebration",
    image:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Jordan Wing',
    description:
      "Ordered a custom cake for my daughter's wedding, and it was everything we hoped for. Elegant design, exquisite taste, and it became a beautiful centerpiece of the evening. Thank you for making our special day even more memorable!",
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Chase Musk',
    description:
      'Every order from here has been a delightful experience. The flavors are unique and always leave my guests impressed. Highly recommend for anyone looking for something special.',
    image:
      'https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default function Example() {
  return (
    <div className="pb-20">
      <h1 className="text-center text-4xl xl:text-5xl font-bold text-slate-900 p-2">
        What our customers have to say
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 p-10 justify-items-center">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex flex-col justify-center items-center text-center my-2">
            <div>"{review.description}"</div>
            <div className="flex items-center space-x-4 mt-4 justify-center">
              <img
                src={review.image}
                alt=""
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <div className="flex text-orange-300">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
