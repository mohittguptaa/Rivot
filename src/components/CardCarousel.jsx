import React, { useState } from 'react';

const cards = [
  {
    image: 'https://source.unsplash.com/random/800x600?nature,water',
    title: 'Beautiful Nature',
    description: 'Explore the beauty of nature in its purest form.',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?mountain,landscape',
    title: 'Mountain Landscape',
    description: 'Witness breathtaking mountain landscapes.',
  },
  {
    image: 'https://source.unsplash.com/random/800x600?forest,trees',
    title: 'Mystic Forest',
    description: 'Dive into the mysteries of the deep forest.',
  },
];

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full overflow-hidden h-80">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div key={index} className="relative flex items-center justify-center h-full min-w-full">
            <div
              className="relative w-full h-full bg-center bg-cover group"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="absolute inset-0 transition duration-300 ease-in-out bg-black/40 group-hover:bg-black/60"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <p className="mt-2 text-sm">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute p-2 text-white transform -translate-y-1/2 rounded-full top-1/2 -left-4 bg-black/60 focus:outline-none"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 text-white transform -translate-y-1/2 rounded-full top-1/2 -right-4 bg-black/60 focus:outline-none"
      >
        &rarr;
      </button>
    </div>
  );
}
