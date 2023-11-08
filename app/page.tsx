import {
  Alert,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material'
import { cookies } from 'next/headers'

import SpotifyAuthorizeButton from './Spotify/SpotifyAuthorizeButton'
import { ExpandMore } from '@mui/icons-material'

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
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Instructions
          </AccordionSummary>
          <AccordionDetails>
            <div className={isSpotifyAuthorized ? 'line-through' : ''}>
              Step 1: Sign in to your Spotify Account
            </div>
            <Alert severity="info" className="text-xs rounded-md my-2">
              Clicking on the Authorize Spotify button below will redirect you
              to the Spotify login screen and ask for your permission to view
              your playlists. None of your personal information will be stored,
              and you can revoke access at any time. You can see the{' '}
              <a href="https://github.com/byrdmic/play-sync">
                source code here
              </a>
              .
            </Alert>
          </AccordionDetails>
        </Accordion>
        <div>Instructions</div>
        <div>
          <div className={isSpotifyAuthorized ? 'line-through' : ''}>
            Step 1: Sign in to your Spotify Account
          </div>
          {!isSpotifyAuthorized && (
            <Alert severity="info" className="text-xs rounded-md my-2">
              Clicking on the button below will redirect you to the Spotify
              login screen and ask for your permission to view your playlists.
              None of your personal information will be stored, and you can
              revoke access at any time. You can see the{' '}
              <a href="https://github.com/byrdmic/play-sync">
                source code here
              </a>
              .
            </Alert>
          )}
          {!isSpotifyAuthorized && (
            <div className="mt-4 w-1/2">
              <SpotifyAuthorizeButton />
            </div>
          )}
        </div>
        <div>Step 2: Sign in to your Amazon Music</div>
      </div>
      {/* <Spotify /> */}
    </main>
  )
}
