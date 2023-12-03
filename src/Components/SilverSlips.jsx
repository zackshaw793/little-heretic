import { Container, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const SilverSlips = () => { 
    return (
        <>
            <Container>
                <h3 className='text-center mt-5'>The Silver Slips of Daylight: Poetry and Prose, will be coming
                                                to the Kindle Store soon. A print edition will follow.</h3>

                        <Link to='https://a.co/d/7K93LKG' target='_blank' rel='noreferrer' className='d-grid mt-3 text-center' id='card-link'>Pre-Order on Amazon</Link>                       
                <img src='/assets/design proposal (1).png' id='book-cover'/>
            </Container>
                <Container className='text-center mt-5'>
                    <Link to='/' className='flex justify-content-center'>
                        <Button variant='outline-secondary' className='col-md-5 mb-5 p-3 bg-transparent' id='writing-page-button' size='lg'>
                            Return Home
                        </Button>
                    </Link>
                </Container>
        </>
    )
}

export default SilverSlips;



