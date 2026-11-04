import { useState } from 'react';

export function FilterPills({ categories, onFilterChange }) {
  const [active, setActive] = useState('All');

  return (
    <div className="flex flex-wrap gap-2 mb-10">
      <button
        onClick={() => {
          setActive('All');
          onFilterChange('All');
        }}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
          active === 'All'
            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
            : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setActive(cat);
            onFilterChange(cat);
          }}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            active === cat
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
              : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
