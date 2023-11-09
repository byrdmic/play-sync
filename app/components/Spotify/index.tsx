import { cookies } from 'next/headers'

import SpotifyAuthorizeButton from './SpotifyAuthorizeButton'

import AccountContainer from '../AccountContainer'

export default function Spotify() {
  const spotifyAccessToken = cookies().get('spotify_access_token')
  const isSpotifyAuthorized = !!spotifyAccessToken
  return (
    <AccountContainer title="Spotify">
      <SpotifyAuthorizeButton />
      <div className="text-xl">
        Status: {isSpotifyAuthorized ? 'Authorized' : 'Unauthorized'}
      </div>
    </AccountContainer>
  )
}
