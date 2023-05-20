import React from 'react'
import Accordion from '../components/Accordion'

function AccordionPage() {
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

export default AccordionPage