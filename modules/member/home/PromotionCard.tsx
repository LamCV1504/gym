"use client";

import { useEffect, useState } from "react";

const promos = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    title: "50% OFF Membership",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
    title: "Free PT Session",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    title: "Summer Body Promo",
  },
];

export default function PromoCarousel() {
  const [current, setCurrent] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      {promos.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-end p-4">
            <h3 className="text-white font-semibold text-lg">{item.title}</h3>
          </div>
        </div>
      ))}

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {promos.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
