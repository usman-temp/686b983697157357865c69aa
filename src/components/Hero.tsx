import { useState } from 'react';

export default function Hero() {
  const [authorInfo, setAuthorInfo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetchAuthor = async () => {
    try {
      const response = await fetch('/api/author');
      if (!response.ok) throw new Error('Failed to fetch author');
      const data = await response.json();
      setAuthorInfo(`${data.name} - ${data.role}`);
      setError(null);
    } catch (err) {
      setError('Error retrieving author information');
      console.error('Fetch error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Discover Our Team</h1>
        <button
          onClick={handleFetchAuthor}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Retrieve author information"
        >
          Meet the Author
        </button>
        
        {authorInfo && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg text-gray-700">{authorInfo}</p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            ⚠️ {error}
          </div>
        )}
      </div>
    </div>
  );
}