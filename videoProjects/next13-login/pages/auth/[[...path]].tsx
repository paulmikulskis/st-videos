"use client";

import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import SuperTokens from 'supertokens-auth-react'
import { redirectToAuth } from 'supertokens-auth-react'
import Head from 'next/head';

const SuperTokensComponentNoSSR = dynamic<React.ComponentProps<typeof SuperTokens.getRoutingComponent>>(
  new Promise((res) => res(SuperTokens.getRoutingComponent)),
  { ssr: false }
)

export default function Auth() {

  // if the user visits a page that is not handled by us (like /auth/random), then we redirect them back to the auth page.
  useEffect(() => {
    if (SuperTokens.canHandleRoute() === false) {
      alert(`redirecting to auth!`)
      redirectToAuth()
    }
    alert(`Supertokens.canHandleRoute() === true!`)
  }, [])

  return (
    <div >
    <Head>
      <title>SuperTokens 💫</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main >
      <SuperTokensComponentNoSSR />
    </main>
  </div>
  )
}