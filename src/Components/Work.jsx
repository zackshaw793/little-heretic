import { Container } from "react-bootstrap"
import Discog from "./Discog.jsx"

export default function Work() {
  return (
    <div>
        <Container className=" fluid d-flex justify-content-start align-items-center" style={{ minHeight: "10svh", textDecoration: 'none' }}>
            <h1>An Introduction</h1>
        </Container>
        <Container className=" fluid d-flex justify-content-start align-items-center" style={{ minHeight: '1em'}}>
            <p>
                Little Heretic is a mixed media art project created in 2022. My name is Zack Shaw and I am a musician, writer, and artist from central Massachusetts. 
                The project began after years of playing in several bands and writing hundreds of songs and poems and I felt I needed a centralized home for all of my work and creative endeavors.
                Whether it be solo work or collaborations with other musicians and friends, Little Heretic is a place for me to share this all with you. 
            <br />
            <br />
                I recently began a pursuit of web development and thought having a home for all of my creative work independent of social media and 
                previously established platforms would be a great way to practice and hone in on all of my interests. I just love to create. I hope you enjoy what you find here.
            </p>
        </Container>
       
        {/* Card Section */}
       
            <Discog />
    
    </div>
  )
}