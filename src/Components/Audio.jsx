import { Container } from 'react-bootstrap';
import Song from '/assets/01.Parking-Lot.wav';

export default function Audio() {
    return (
        <>
            <Container>
                <audio controls id='audio-player'>
                    <source src={Song} type='audio/wav' />
                </audio>
            </Container>
        </>
    )
}