import { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  const scope = 'playlist-read-private'
  return Response.redirect(
    `https://accounts.spotify.com/authorize?${new URLSearchParams({
      scope,
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID as string,
      redirect_uri: 'http://localhost:3000/api/auth/spotify/callback',
    })}`,
  )
}
