import { verifySession } from 'supertokens-node/recipe/session/framework/express'
import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import supertokens from 'supertokens-node'
import { backendConfig } from './backendConfig'
import { NextResponse } from 'next/server';
import { json } from 'stream/consumers';
import { ExpressResponse } from 'supertokens-node/lib/build/framework/express/framework';
import { Response } from 'express'



export async function SessionVerify(request: Request) {
    try {
        await superTokensNextWrapper(
            async (next) => {
                return await verifySession()(request as any, request as any, next)
            },
            request, request
        )
        return undefined
    } catch (err) {
        const resp = NextResponse.json({message: 'Session verification failed'}, { status: 401})
        return resp
    }

  }