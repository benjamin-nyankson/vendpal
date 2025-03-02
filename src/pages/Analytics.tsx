import { useEffect, useState } from "react";

export default function Analytics() {
  const [pageViews, setPageViews] = useState(0);
  const [buttonClicks, setButtonClicks] = useState(0);

  // Load analytics data from localStorage
  useEffect(() => {
    const storedPageViews = parseInt(localStorage.getItem("pageViews") || "0", 10);
    const storedButtonClicks = parseInt(localStorage.getItem("buttonClicks") || "0", 10);

    setPageViews(storedPageViews + 1);
    setButtonClicks(storedButtonClicks);

    localStorage.setItem("pageViews", (storedPageViews + 1).toString());
  }, []);

  // Handle button click tracking
  const handleButtonClick = () => {
    const newCount = buttonClicks + 1;
    setButtonClicks(newCount);
    localStorage.setItem("buttonClicks", newCount.toString());
  };

  return (
    <div className="p-6 border rounded-xl shadow-md w-80 bg-white">
      <h2 className="text-xl font-bold mb-4">Analytics Dashboard</h2>
      <p className="mb-2">📊 Page Views: <strong>{pageViews}</strong></p>
      <p className="mb-4">🖱️ Button Clicks: <strong>{buttonClicks}</strong></p>
      <button 
        onClick={handleButtonClick} 
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Click Me
      </button>
    </div>
  );
}
