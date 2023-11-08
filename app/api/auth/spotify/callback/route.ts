import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const error = request.nextUrl.searchParams.get('error')
  if (error) {
    console.error('Error when attempting authorization!', error)
    return
  }

  const code = request.nextUrl.searchParams.get('code')
  // const state = request.nextUrl.searchParams.get('state')

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
      ).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code as string,
      redirect_uri: 'http://localhost:3000/api/auth/spotify/callback',
    }),
  })
  const responseJson = (await response.json()) as {
    access_token: string
    token_type: string
    expires_in: number
    refresh_token: string
    scope: string
  }
  cookies().set('spotify_access_token', responseJson.access_token, {
    maxAge: responseJson.expires_in,
  })
  return Response.redirect('http://localhost:3000')
}
