import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Amy Winehouse",
    description:
      "I ordered a custom birthday cake from here, and it was a hit! Not only was it visually stunning, but it tasted heavenly. Their attention to detail is remarkable, and the service was friendly and helpful. Can't wait to order again for our next celebration",
    image:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jordan Wing",
    description:
      "Ordered a custom cake for my daughter's wedding, and it was everything we hoped for. Elegant design, exquisite taste, and it became a beautiful centerpiece of the evening. Thank you for making our special day even more memorable!",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Chase Musk",
    description:
      "Every order from here has been a delightful experience. The flavors are unique and always leave my guests impressed. Highly recommend for anyone looking for something special.",
    image:
      "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function Reviews() {
  return (
    <div className="pb-20">
      <h1 className="p-2 text-4xl font-bold text-center xl:text-5xl text-slate-900">
        What our customers have to say
      </h1>
      <div className="grid grid-cols-1 gap-10 p-10 mx-auto max-w-7xl sm:grid-cols-3 justify-items-center">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex flex-col items-center justify-center my-2 text-center"
          >
            <div>"{review.description}"</div>
            <div className="flex items-center justify-center mt-4 space-x-4">
              <img
                src={review.image}
                alt=""
                className="object-cover w-20 h-20 rounded-full"
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
