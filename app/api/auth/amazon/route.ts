import { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  return Response.redirect(
    `https://www.amazon.com/ap/oa?${new URLSearchParams({
      client_id: process.env.AMAZON_CLIENT_ID as string,
      scope: 'amazon_music:access',
      response_type: 'code',
      redirect_uri: 'http://localhost:3000/api/auth/amazon/callback',
    })}`,
  )
}
