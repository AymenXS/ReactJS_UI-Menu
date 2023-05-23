import React from 'react';
import { useState } from 'react';
import Categories from './Categories';
import data from './data';
import Menu from './Menu';
import Title from './Title';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      return setMenuItems(data);
    }
    const newItems = data.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text={'Our Menu'} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />;
      </section>
    </main>
  );
};
export default App;
