import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion sx={{ marginBottom: 2, padding: '4px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">How to create an account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            1. First, log in to your elderlyFirst account.
            <br />
            2. After logging in, navigate to the "Settings" section.
            <br />
            3. Follow the steps outlined in the "Settings" to complete the setup.
            <br />
            It's important to note that elderlyFirst does not charge any fees for creating or maintaining your account.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginBottom: 2, padding: '4px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">How to add a payment by this app?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="body1">
          1. Click the "Wallet" tab.
          <br />
          2. Within the "Wallet" tab, locate and click on the "Add funds" option.
          <br />
          3. You will be prompted to provide your banking information.
          <br />
          4. Carefully enter your banking information as required.
          <br />
          5. Confirm the details and proceed with the fund addition process.
        </Typography>

        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginBottom: 2, padding: '4px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">How to add multiple people into a group chat?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="body1">
          1. Click the messaging tab.
          <br />
          2. In the messaging tab, click "New messages +."
          <br />
          3. Add as many people as you want into the group chat.
          <br />
          4. Once you've added the desired participants, click the "Enter" button.
          <br />
          5. Congratulations! The group chat is now created, and you can start messaging with all the selected participants in one conversation.
        </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginBottom: 2, padding: '4px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant="h6">How do I log out?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            1. Click the settings icon located on the top left corner of the page.
            <br />
            2. This action will direct you to the settings page.
            <br />
            3. On the settings page, locate and click the "Log Out" option.
            <br />
            4. You will be successfully logged out of your account.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginBottom: 2, padding: '4px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography variant="h6">How do I check my recent call history?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            1. On the left side of the page, click on the "History" tab.
            <br />
            2. This action will open up a history section, displaying a record of the individuals you have messaged and audio and video called.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
