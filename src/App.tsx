import { useState } from 'react';

type Person = { id: number; name: string };

const PERSONS: Person[] = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Abas' },
  { id: 3, name: 'Mamad' },
  { id: 4, name: 'Raha' },
  { id: 5, name: 'Fateme' },
  { id: 6, name: 'Aysana' },
  { id: 7, name: 'Hosein' },
  { id: 8, name: 'Abol' },
];

function App() {
  const [search, setSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const filtered = PERSONS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen p-4`}>
      <div className="max-w-md mx-auto space-y-4">

        {/* دکمه دارک مود */}
        <button
          onClick={() => setDarkMode(prev => !prev)}
          className={`px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
        >
          {darkMode ? 'حالت روشن' : 'حالت تاریک'}
        </button>

        {/* جستجو */}
        <input
          type="text"
          placeholder="جست‌وجو..."
          className={`w-full px-3 py-2 border rounded-md ${darkMode
              ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* لیست افراد */}
        <div className="grid grid-cols-2 gap-2">
          {filtered.map(p => (
            <button
              key={p.id}
              onClick={() => toggleSelect(p.id)}
              className={`border rounded-md text-center py-2 ${selectedIds.includes(p.id)
                  ? 'bg-amber-300 text-white'
                  : darkMode
                    ? 'bg-gray-800 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
