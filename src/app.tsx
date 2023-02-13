import React, { useEffect } from "https://esm.sh/react@18.2.0";
import confetti from "https://esm.sh/canvas-confetti@1.6.0";

const App = () => {
  useEffect(() => {
    confetti();
  }, []);

  return (
    <div>
      <h1>Hello React! ⚛️</h1>
      <p>Building user interfaces.</p>
    </div>
  );
};

export default App;
