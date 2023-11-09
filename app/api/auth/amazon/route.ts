import { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  return Response.redirect(
    `https://www.amazon.com/ap/oa?${new URLSearchParams({
      client_id: process.env.AMAZON_CLIENT_ID as string,
      scope: 'profile',
      response_type: 'code',
      redirect_uri: 'http://localhost:3000/api/auth/amazon/callback',
    })}`,
  )
  // return Response.redirect(
  //   `https://accounts.spotify.com/authorize?${new URLSearchParams({
  //     scope,
  //     response_type: 'code',
  //     client_id: process.env.SPOTIFY_CLIENT_ID as string,
  //     redirect_uri: 'http://localhost:3000/api/auth/spotify/callback',
  //   })}`,
  // )
}
