import { ExpandMore } from '@mui/icons-material'
import {
  Alert,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material'

export default function Instructions() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        Instructions
      </AccordionSummary>
      <AccordionDetails>
        <div>Step 1: Sign in to your Spotify Account</div>
        <Alert severity="info" className="text-xs rounded-md my-2">
          Clicking on the Authorize Spotify button will redirect you to the
          Spotify login screen and ask for your permission to view your
          playlists and basic profile information. None of your personal
          information will be stored, and you can revoke access at any time. You
          can see the{' '}
          <a href="https://github.com/byrdmic/play-sync">source code here</a>.
        </Alert>
        <div>Step 2: Sign in to your Amazon Music</div>
      </AccordionDetails>
    </Accordion>
  )
}
