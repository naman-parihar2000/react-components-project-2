import React from 'react'
import Link from './Link.js'

function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
    ];

    const renderedLinks = links.map((link) => {
        return <Link className='mb-3' key={link.label} to={link.path} activeClassName='font-bold border-l-4 border-red-400 pl-2'>{link.label}</Link>
    })

    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
            {renderedLinks}
        </div>
    )
}

export default Sidebar