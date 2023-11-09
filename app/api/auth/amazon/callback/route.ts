import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  console.log('we are on a GET')
  const error = request.nextUrl.searchParams.get('error')
  if (error) {
    console.error('Error when attempting authorization!', error)
    return
  }

  const code = request.nextUrl.searchParams.get('code')

  const response = await fetch('https://api.amazon.com/auth/o2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code as string,
      client_id: process.env.AMAZON_CLIENT_ID as string,
      client_secret: process.env.AMAZON_CLIENT_SECRET as string,
      redirect_uri: 'http://localhost:3000/api/auth/amazon/callback',
    }),
  })
  const responseJson = (await response.json()) as {
    access_token: string
    token_type: string
    expires_in: number
    refresh_token: string
  }
  cookies().set('amazon_access_token', responseJson.access_token, {
    maxAge: responseJson.expires_in,
  })
  return Response.redirect('http://localhost:3000')
}
