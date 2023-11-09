import { cookies } from 'next/headers'

const baseUrlAmazon = 'https://api.music.amazon.dev/v1'
export function fetchAmazon({
  endpoint,
  method = 'GET',
  body,
}: {
  endpoint: string
  method?: 'GET' | 'PUT' | 'POST'
  body?: string
}) {
  const amazonAccessToken = cookies().get('amazon_access_token')
  return fetch(`${baseUrlAmazon}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${amazonAccessToken}`,
      'x-api-key': process.env.AMAZON_LWA_PROFILE_ID as string,
    },
    body,
  })
}
