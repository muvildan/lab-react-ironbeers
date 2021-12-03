import React from 'react';
import { Link } from 'react-router-dom'

export default function Header () {

    return(
<div>
    <Link to="/">
<header>
    <h1><i className="bi bi-house"></i></h1>
</header>
    </Link>
</div>
    )
}