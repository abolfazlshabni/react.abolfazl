// src/App.tsx
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


  const filtered = PERSONS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <input
        type="text"
        placeholder="جست‌وجو..."
        className="w-full px-3 py-2 border rounded-md"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-2">
        {filtered.map(p => (
          <button
            key={p.id}
            onClick={() => toggleSelect(p.id)}
            className={`border rounded-md text-center py-2  ${selectedIds.includes(p.id) ? 'bg-amber-300 text-white' : ''
              }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
