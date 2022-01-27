
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Card from './components/Card';

function App() {

  const activeButtonStyle = "absolute w-10 h-10 bg-gray-400 top-15 cursor-pointer transition-all rounded-r-lg transform duration-700 flex items-center justify-center translate-x-60"
  const buttonStyle = "absolute w-10 h-10 bg-gray-400 top-15 cursor-pointer rounded-r-lg transition-all transform duration-700 flex items-center justify-center"
  const spanStyle = "sm:font-bold md:font-medium lg:font-light  "

  const [active, setActive] = useState(false);
  return (
    <>
      <header>
        <div className=' bg-gray-200'>
          <div className="max-w-9xl mx-auto px-4 shadow-lg">
            <div className="flex justify-between items-center border-b-2 border-transparent-400 py-6 ">
              <span className="sm:font-bold md:font-medium lg:font-light">Egle's portfolio</span>
              {
                !active &&
                <>
                  <a href="#" className='no-underline hover:underline'><span className={spanStyle}>About me</span></a>
                  <a href="#" className='no-underline hover:underline'><span className={spanStyle}>Contacts</span></a>

                </>
              }
            </div>
          </div>
        </div>
      </header>

      <div className={active ? activeButtonStyle : buttonStyle}
        onClick={() => setActive(!active)}
      >	&#9776;
      </div>
      {
        active &&
        <div className="parent h-screen md:grid md:grid-cols-2 ">
          <Sidebar />
          <Card />
        </div>
      }
      {
        !active &&
        <div className='flex justify-center items-center'>
          <Card />
        </div>
      }

    </>
  );
}

export default App;
