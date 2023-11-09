import { cookies } from 'next/headers'

export default function Home() {
  const spotifyAccessToken = cookies().get('spotify_access_token')
  const isSpotifyAuthorized = !!spotifyAccessToken
  return (
    <main className="flex flex-col p-24">
      <div className="flex flex-col items-center">
        <div className="text-7xl font-bold text-center">Play Sync</div>
        <div className="p-6">
          Transfer Playlists from Spotify to Amazon Music
        </div>
      </div>
      <div>
        <Instructions />
      </div>
      {/* <Spotify /> */}
    </main>
  )
}
