import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import useFileProcessing from './hooks/useFileProcessing';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Initialize file processing hook
  useFileProcessing();

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <MainContent />
    </div>
  );
}

export default App;