

export default function QuoteBox({change, txt,auth,twitterURL}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center max-w-xl w-full">
        <h1 className="text-white text-2xl font-semibold mb-4">"{txt}"</h1>
        <p className="text-gray-400 text-lg mb-6">- {auth}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={change}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
          >
            New Quote
          </button>
          <a
            href={twitterURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
          >
            Share
          </a>
        </div>
      </div>
    </div>
  );
}
