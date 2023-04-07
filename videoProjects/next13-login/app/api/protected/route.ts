import { verifySession } from 'supertokens-node/recipe/session/framework/express'
import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import supertokens from 'supertokens-node'
import { backendConfig } from '../../../config/backendConfig'
import { NextResponse } from 'next/server';
import { json } from 'stream/consumers';
import { ExpressResponse } from 'supertokens-node/lib/build/framework/express/framework';
import { Response } from 'express'
import { SessionVerify } from '../../../config/routeWrapper'

supertokens.init(backendConfig())


export async function GET(request: Request) {

    const verify = SessionVerify(request)
    if (verify) return verify
    // if it comes here, it means that the session verification was successful
    return NextResponse.json({ message: 'Hello, protected API route!'})

  }