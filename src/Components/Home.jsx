
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

export default function Home() {

  const [selectedButton, setSelectedButton] = useState(null);


  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <header style={{ height: '100vh', overflow: 'hidden' }}>
        <Image src='/assets/sitebanner.png' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </header>
      <div id='button-container' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '15%', textAlign: 'center' }}>
        <Container className='col-lg-6 mx-auto p-5 text-center' id='button'>
          <Stack gap={2} direction="row" className='bg-transparent'>
            <Link to='/upcoming' className='flex justify-content-center bg-transparent'>
              <Button
                variant={selectedButton === 'upcoming' ? 'light' : 'outline-light'}
                className='col-md-5 p-3 bg-transparent'
                id='button-custom'
                size='lg'
                onClick={() => handleButtonClick('upcoming')}
              >
                The Silver Slips of Daylight
              </Button>
            </Link>
            <Link to='/pdf' className='flex justify-content-center bg-transparent'>
              <Button
                variant={selectedButton === 'pdf' ? 'light' : 'outline-light'}
                className='col-md-5 p-3 bg-transparent'
                id='button-custom'
                size='lg'
                onClick={() => handleButtonClick('pdf')}
              >
                The Silver Slips of Daylight, Companion
              </Button>
            </Link>
          </Stack>
        </Container>
      </div>
    </>
  );
}