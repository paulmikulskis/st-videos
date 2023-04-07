"use client";

import React from 'react'
import dynamic from 'next/dynamic'
import { SessionAuth } from 'supertokens-auth-react/recipe/session'

function Home() {
    return ( 
        <SessionAuth>
            <p>Protected Text</p>
        </SessionAuth>
     );
}

export default Home;