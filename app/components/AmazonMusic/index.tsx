import { cookies } from 'next/headers'

import { fetchAmazon } from '@/app/api/fetch'

import AmazonAuthorizeButton from './AmazonAuthorizeButton'

import AccountContainer from '../AccountContainer'

export default async function AmazonMusic() {
  const amazonAccessToken = cookies().get('amazon_access_token')
  const isAmazonAuthorized = !!amazonAccessToken
  if (isAmazonAuthorized) {
    const response = await fetchAmazon({
      endpoint: '/me/playlists',
    })
    console.log('response', await response.json())
  }
  return (
    <AccountContainer title="Amazon Music">
      <AmazonAuthorizeButton />
      <div className="text-xl">
        Status: {isAmazonAuthorized ? 'Authorized' : 'Unauthorized'}
      </div>
    </AccountContainer>
  )
}
