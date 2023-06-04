import Route from './components/Route';
import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';

function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar />
      <div className='col-span-5'>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;

////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react'
// import Dropdown from './components/Dropdown.js'

// function App() {
//   const [selection, setSelection] = useState(null);

//   const handleSelect = (option) => {
//     setSelection(option)
//   }

//   const options = [
//     { label: 'Red...', value: 'red' },
//     { label: 'Yellow...', value: 'yellow' },
//     { label: 'Green...', value: 'green' },
//     { label: 'Blue...', value: 'blue' },
//   ]

//   return (
//     <div>
//       <Dropdown options={options} value={selection} onChange={handleSelect} />
//     </div>
//   )
// }

// export default App

// const items = [
//   {
//     id: 1,
//     label: 'can i use react on a project',
//     content: 'Lorem ipss eveniet, ad ex maiores est. Necessitatibus, enim magni'
//   },
//   {
//     id: 2,
//     label: 'can i use react on a project',
//     content: 'Lorem ipss eveniet, ad ex maiores est. Necessitatibus, enim magni'
//   },
//   {
//     id: 3,
//     label: 'can i use react on a project',
//     content: 'Lorem ipss eveniet, ad ex maiores est. Necessitatibus, enim magni'
//   },
// ];

// return (
//   <Accordion items={items}></Accordion>
// )

///////////////////////////////////////////////////////////////////////////////////////////////////////

// import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
// import Button from './components/Button.js';

// function App() {
//   const handleClick = () => {
//     console.log('Clicked!');
//   };

//   return (
//     <div>
//       <div>
//         <Button
//           secondary
//           rounded
//           className="mb-5"
//           onClick={handleClick}
//         >
//           <GoBell />
//           Click me!!
//         </Button>
//       </div>
//       <div>
//         <Button danger onMouseEnter={handleClick}>
//           <GoCloudDownload />
//           Buy Now!
//         </Button>
//       </div>
//       <div>
//         <Button warning onMouseLeave={handleClick}>
//           <GoDatabase />
//           See Deal!
//         </Button>
//       </div>
//       <div>
//         <Button secondary>
//           Hide Ads!
//         </Button>
//       </div>
//       <div>
//         <Button primary rounded>
//           Something!
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default App;
