'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@mui/material'

export default function SpotifyAuthorizeButton() {
  const router = useRouter()
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={() => {
        router.push('/api/auth/spotify')
      }}
    >
      Authorize Spotify
    </Button>
  )
}
