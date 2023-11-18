import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import PDFDisplay from './SilverSlips';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
        <header style={{height: '100vh', overflow: 'hidden'}}>
            <Image src='./src/assets/sitebanner.png' style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </header>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '15%', textAlign: 'center' }}>
                <Container className='col-lg-6 mx-auto p-5 text-center'>
                    <Link to='/pdf' className='flex justify-content-center'>
                    <Button variant="outline-light" className='col-md-5 p-3' size='lg' onClick={<PDFDisplay />}>The Silver Slips of Daylight</Button>
                    </Link>
                </Container>    
            </div>
    </>
  )
}