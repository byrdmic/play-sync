import Instructions from './Instructions'
import Spotify from './components/Spotify'
import AmazonMusic from './components/AmazonMusic'

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <div className="flex flex-col items-center">
        <div className="text-7xl font-bold text-center">Play Sync</div>
        <div className="p-6">
          Transfer Playlists from Spotify to Amazon Music
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-1/2 mt-6 mb-12">
          <Instructions />
        </div>
        <div className="flex w-2/3 justify-center">
          <div className="w-1/2 p-2">
            <Spotify />
          </div>
          <div className="w-1/2 p-2">
            <AmazonMusic />
          </div>
        </div>
      </div>
    </main>
  )
}
