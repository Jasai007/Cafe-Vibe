import React, { useState } from 'react';
import { menuData } from '../data/menuData';

// Define the types
type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary?: string[];
};

type MenuCategory = {
  id: string;
  name: string;
};

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeDietary, setActiveDietary] = useState<string>('');

  const categories: MenuCategory[] = [
    { id: 'all', name: 'All Items' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
  ];

  const dietaryOptions = [
    { id: '', name: 'All Dietary Options' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'vegan', name: 'Vegan' },
    { id: 'gluten-free', name: 'Gluten Free' },
  ];

  const filteredItems = menuData.filter((item) => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const dietaryMatch = !activeDietary || (item.dietary && item.dietary.includes(activeDietary));
    return categoryMatch && dietaryMatch;
  });

  return (
    <div>
      {/* Menu Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-menu-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-cream font-bold mb-4">Our Menu</h1>
          <p className="text-cream-light text-xl max-w-2xl mx-auto">
            Handcrafted with care, our menu features the finest ingredients and flavors
          </p>
        </div>
      </section>

      {/* Menu Filter Section */}
      <section className="py-8 bg-cream">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      activeCategory === category.id
                        ? 'bg-brown text-cream'
                        : 'bg-cream-dark text-brown hover:bg-brown-light hover:text-cream-light'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary Filter */}
            <div className="w-full md:w-auto">
              <select
                value={activeDietary}
                onChange={(e) => setActiveDietary(e.target.value)}
                className="bg-cream-light border border-cream-dark rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brown"
              >
                {dietaryOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div key={item.id} className="card group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <span className="font-medium text-accent">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-brown text-sm mb-3">{item.description}</p>
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.dietary.map((diet) => (
                          <span
                            key={diet}
                            className="px-2 py-1 bg-cream-dark text-brown-dark rounded-full text-xs"
                          >
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-lg text-brown">No items match your current filters. Please try different options.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Special Offerings */}
      <section className="section-padding bg-cream-light">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="mb-4">Seasonal Specials</h2>
            <p className="max-w-2xl mx-auto">
              Don't miss our limited-time offerings, featuring seasonal ingredients and unique flavor combinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6 bg-gradient-to-br from-brown/10 to-cream">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <img
                    src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Pumpkin Spice Latte"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">Pumpkin Spice Latte</h3>
                    <span className="font-medium text-accent">$5.50</span>
                  </div>
                  <p className="text-brown my-2">
                    Our signature espresso with steamed milk, real pumpkin, and fall spices, topped with whipped cream and cinnamon.
                  </p>
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-cream-dark text-brown-dark rounded-full text-xs mr-2">
                      Limited Time
                    </span>
                    <span className="px-2 py-1 bg-cream-dark text-brown-dark rounded-full text-xs">
                      Fall Favorite
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-br from-brown/10 to-cream">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <img
                    src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Lavender Honey Cake"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">Lavender Honey Cake</h3>
                    <span className="font-medium text-accent">$6.25</span>
                  </div>
                  <p className="text-brown my-2">
                    Delicate sponge cake infused with lavender, layered with honey buttercream and topped with dried lavender buds.
                  </p>
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-cream-dark text-brown-dark rounded-full text-xs mr-2">
                      Chef's Special
                    </span>
                    <span className="px-2 py-1 bg-cream-dark text-brown-dark rounded-full text-xs">
                      Vegetarian
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Info */}
      <section className="section-padding bg-brown text-cream-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-cream mb-6">Catering Services</h2>
            <p className="mb-6">
              We offer custom catering packages for events of all sizes, from small office meetings to large celebrations. Our team will work with you to create the perfect menu for your occasion.
            </p>
            <a
              href="#"
              className="btn bg-cream text-brown hover:bg-cream-dark inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                alert('Catering inquiry form would open here in a real application');
              }}
            >
              <span>Inquire About Catering</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;