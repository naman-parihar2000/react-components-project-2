import React from 'react'
import Accordion from './components/Accordion'

function App() {
  const items = [
    {
      id: 1,
      label: 'can i use react on a project',
      content: 'Lorem ipss eveniet, ad ex maiores est. Necessitatibus, enim magni'
    },
    {
      id: 2,
      label: 'can i use react on a project',
      content: 'Lorem ipss eveniet, ad ex maiores est. Necessitatibus, enim magni'
    },
    {
      id: 3,
      label: 'can i use react on a project',
      content: 'Lorem ipss eveniet, ad ex maiores est. Necessitatibus, enim magni'
    },
  ];

  return (
    <Accordion items={items}></Accordion>
  )
}

export default App


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
