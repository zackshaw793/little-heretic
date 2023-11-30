import { Container, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SilverSlips = () => { 
    return (
        <>
            <Container>
                <h3 className='text-center mt-5'>The Silver Sleeps of Daylight: Poetry and Prose, will be coming
                                                to the Kindle Store soon. A print edition will follow.</h3>
            </Container>
                <Container className='text-center mt-5'>
                    <Link to='/' className='flex justify-content-center'>
                        <Button variant='outline-secondary' className='col-md-5 p-3 bg-transparent' id='writing-page-button' size='lg'>
                            Return Home
                        </Button>
                    </Link>
                </Container>
        </>
    )
}

export default SilverSlips;



