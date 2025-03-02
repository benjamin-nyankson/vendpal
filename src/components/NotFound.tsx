import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotFound() {
  const navigate = useNavigate();
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-9xl font-extrabold text-red-600 animate-pulse">404</h1>
      <p className="text-2xl font-semibold mt-4">Uh-oh! Lost in cyberspace?</p>
      <p className="text-gray-400 mt-2">We can’t seem to find the page you’re looking for.</p>
      <p className="text-gray-500 mt-2">Redirecting you home in{".".repeat(dotCount)}</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
      >
        Take Me Home
      </button>
    </div>
  );
}
