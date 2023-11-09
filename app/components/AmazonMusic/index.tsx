import { cookies } from 'next/headers'

import AmazonAuthorizeButton from './AmazonAuthorizeButton'

import AccountContainer from '../AccountContainer'

export default function AmazonMusic() {
  const amazonAccessToken = cookies().get('amazon_access_token')
  const isAmazonAuthorized = !!amazonAccessToken
  return (
    <AccountContainer title="Amazon Music">
      <AmazonAuthorizeButton />
      <div className="text-xl">
        Status: {isAmazonAuthorized ? 'Authorized' : 'Unauthorized'}
      </div>
    </AccountContainer>
  )
}
