import { Container, Card, Row, Col } from "react-bootstrap"

export default function Work() {
  return (
    <div>
        <Container className=" fluid d-flex justify-content-start align-items-center" style={{ minHeight: "10svh", textDecoration: 'underline' }}>
            <h1>History</h1>
        </Container>
        <Container className=" fluid d-flex justify-content-start align-items-center" style={{ minHeight: '1em'}}>
            <p>
                Little Heretic is a musical project created by singer-songwriter and multi-instrumentalist, Zack Shaw... Me.
                The project began after years of playing in several bands and writing hundreds of songs and poems and felt like a comfortable place to put all of my effort.
                Essentially I wanted to have a centralized home for all of my recording, writing, and creative endevors. 
                Whether it be solo work or collaborations with other musicians and friends,
                Little Heretic is a place for me to share my work with the world. 
            <br />
            <br />
                I recently began a pursuit of web development and thought having a home for all of my creative work independent of social media and 
                previously established platforms would be a great way to practice and hone in on all of my interests. I just love to create. I hope you enjoy what you find here.
            </p>
        </Container>

        {/* Card Section */}

        <Container className=" fluid d-flex justify-content-start align-items-center" style={{ minHeight: "10svh", textDecoration: 'underline' }}>
            <h1>Discography</h1>
        </Container>
        <Container className=" fluid d-flex justify-content-center align-items-center p-5" style={{ minHeight: '1em'}}>
            <Row>
            <Col>
            <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/itnevergoesout.jpeg" />
                <Card.Body>
                    <Card.Title>The Hotelier, <span style={{fontStyle: 'italic'}}>It Never Goes Out</span></Card.Title>
                    <Card.Text>
                    I played guitar, sang and cowrote the songs on this record. It&apos;s incredibly special to me 
                    and we were just kids figuring things out when we wrote it and I still chereish the discovery we 
                    all shared when writing and creating this. I love these songs and it still makes me cry.
                    </Card.Text>
                    <Card.Link href="https://thehotelier.bandcamp.com/album/it-never-goes-out-2">Bandcamp</Card.Link>
                </Card.Body>
            </Card>
                </Col>
                <Col>
            <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/inlimbo.jpeg" />
                <Card.Body>
                    <Card.Title>Zack Shaw, <span style={{fontStyle: 'italic'}}>In Limbo</span></Card.Title>
                    <Card.Text>
                    I wrote all of these songs after I had left the Hotelier and was trying to find my own sort of sound. I was super
                    into Joyce Manor and like the idea of writing short, fast, and catchy songs. I recorded all of the instruments myself with engineer
                    Ian Van Opijnen. The adolescence is with this one.
                    </Card.Text>
                    <Card.Link href="https://zackshaw.bandcamp.com/album/in-limbo">Bandcamp</Card.Link>
                </Card.Body>
            </Card>
                </Col>
                    <Col>
                        <Card style={{ width: '20rem' }} className="mb-4 me-2">
                            <Card.Img variant="top" src="./src/assets/dysphoriatries.jpeg" />
                            <Card.Body>
                                <Card.Title>Split Seems, <span style={{fontStyle: 'italic'}}>Dysphoria Tries</span></Card.Title>
                                <Card.Text>
                                    For this batch of songs, Alex and I scrounged up some money and went into the studio to record. We had this whole
                                    idea for a comic book and concept record and this is kind of the sketch of what that would be. Maybe one day we&apos;ll 
                                    revisit the idea!
                                </Card.Text>
                                <Card.Link href="https://splitseems.bandcamp.com/album/split-into-ep">Bandcamp</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '20rem' }} className="mb-4 me-2">
                        <Card.Img variant="top" src="./src/assets/somethingaboutadream.jpeg" />
                        <Card.Body>
                            <Card.Title>Locria, <span style={{fontStyle: 'italic'}}>Something About a Dream</span></Card.Title>
                            <Card.Text>
                                This was the first record I did with a band after leaving the Hotelier. I played guitar and sang on this record.
                                Locria had already been playing together and I kind of hopped in this project like a stray. I don&apos;t remember much 
                                about that but I do remember having a lot of fun playing these songs live.
                            </Card.Text>
                            <Card.Link href="https://locria.bandcamp.com/album/something-about-a-dream">Bandcamp</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
            <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/frame.jpeg" />
                <Card.Body>
                    <Card.Title>Zack Shaw, <span style={{fontStyle: 'italic'}}>Frame</span></Card.Title>
                    <Card.Text>
                    I wrote and recorded these songs in my shitty basement room in my moms apartment. It was a horrible time in life and this 
                    record honestly stresses me out to listen to. The songs were all kind of half fleshed out but I think i kind of had an idea of
                    where I wanted to go with them.
                    </Card.Text>
                    <Card.Link href="https://zackshaw.bandcamp.com/album/frame">Bandcamp</Card.Link>
                </Card.Body>
            </Card>
                </Col>
                <Col>
            <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/splitinto.jpeg" />
                <Card.Body>
                    <Card.Title>Split Seems, <span style={{fontStyle: 'italic'}}>Split Into</span></Card.Title>
                    <Card.Text>
                    These are songs my best friend Alex Reinhard and I wrote together. We recorded them in his sisters basement (bless her soul), 
                    and we had so much fun working on this. I think we took like two weeks and just smoked a bunch of pot and would bounce ideas 
                    off of each other.
                    </Card.Text>
                    <Card.Link href="https://splitseems.bandcamp.com/album/split-into-ep">Bandcamp</Card.Link>
                </Card.Body>
            </Card>
                </Col>
                    <Col>
                <Card style={{ width: '20rem' }} className="mb-4 me-2">
                    <Card.Img variant="top" src="./src/assets/dysphoriatries.jpeg" />
                    <Card.Body>
                        <Card.Title>Split Seems, <span style={{fontStyle: 'italic'}}>Dysphoria Tries</span></Card.Title>
                        <Card.Text>
                        For this batch of songs, Alex and I scrounged up some money and went into the studio to record. We had this whole
                        idea for a comic book and concept record and this is kind of the sketch of what that would be. Maybe one day we&apos;ll 
                        revisit the idea!
                        </Card.Text>
                        <Card.Link href="https://splitseems.bandcamp.com/album/split-into-ep">Bandcamp</Card.Link>
                    </Card.Body>
                </Card>
                    </Col>
                <Col>
                    <Card style={{ width: '20rem' }} className="mb-4 me-2">
                        <Card.Img variant="top" src="./src/assets/newlifeinoldshoes.jpeg" />
                        <Card.Body>
                            <Card.Title>Backwards Dancer, <span style={{fontStyle: 'italic'}}>New Life in Old Shoes</span></Card.Title>
                            <Card.Text>
                                Backwards Dancer is a band that started with Andrew Underwood, Ryan Kelleher, and Dave Carlin. We ended up writing this EP
                                and it kind of took off locally. These are honestly some of my favorite songs I&apos;ve ever written and I&apos;m so proud of this record. The songs 
                                have such a sense of urgency and longing to do something more.
                                We ended up getting signed because of this. Unreal. 
                            </Card.Text>
                            <Card.Link href="https://backwardsdancer.bandcamp.com/album/new-life-in-old-shoes">Bandcamp</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
            <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/bdselftitled.jpeg" />
                <Card.Body>
                    <Card.Title>Backwards Dancer, <span style={{fontStyle: 'italic'}}>Self Titled</span></Card.Title>
                    <Card.Text>
                    This is the first LP we created as Backwards Dancer. At the time we signed to Rory Records, a label owned by Max Bemis of Say Anything.
                    Say Anything are one of my favorite bands of all time and working with Max was a massive privilege. We wrote these songs over the course of like a year.
                    The contrast of this record
                    is the fact that I was struggling massively with my mental health and addiction. There was so much daulity during this time.  
                    </Card.Text>
                    <Card.Link href="https://backwardsdancer.bandcamp.com/album/backwards-dancer">Bandcamp</Card.Link>
                </Card.Body>
            </Card>
                </Col>
                <Col>
            <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/audiotreecover.jpeg" />
                <Card.Body>
                    <Card.Title>Backwards Dancer, <span style={{fontStyle: 'italic'}}>Audiotree, Live</span></Card.Title>
                    <Card.Text>
                    While we were on tour with Say Anything, a literal dream come true, we were asked to do an Audiotree session.
                    We had so much fun and the professionalism and skill of the entire audiotree team was incredible to behold. 
                    I feel so spoiled to have these recordings, they came out so good. It was great that we happened to be in the middle of
                    tour so we were super tight. 
                    </Card.Text>
                    <Card.Link href="https://backwardsdancer.bandcamp.com/album/backwards-dancer-audiotree-live">Bandcamp</Card.Link>
                </Card.Body>
            </Card>
                </Col>
                <Col>
                <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/bestpart.jpeg" />
                <Card.Body>
                    <Card.Title>Zack Shaw, <span style={{fontStyle: 'italic'}}>The Best Part of All of This is Existing While You Exist </span></Card.Title>
                    <Card.Text>
                        I wrote these songs while i was newly sober and the songs really reflect that. I was living with my now wife, Ashleigh, and our
                        roommate and good friend, Ashley. I would go hide in one of our spare bedrooms and living room. It was like this meditation to work on these songs.
                        The songs in retrospect are really vulnerable and it&apos;s one of my favorite batch of songs I&apos;ve ever written. Best with headphones. 
                    </Card.Text>
                    <Card.Link href="https://zackshaw.bandcamp.com/album/the-best-part-of-all-of-this-is-existing-while-you-exist">Bandcamp</Card.Link>
                </Card.Body>   
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/rememberme.jpg" />
                <Card.Body>
                    <Card.Title>Zack Shaw, <span style={{fontStyle: 'italic'}}>Remember Me When I Get Old </span></Card.Title>
                    <Card.Text>
                        This is a collection that is kind of an extension of the previous record. I was using garageband a ton and just
                        putting down my first thought and wanted the songs in the world. I definitely put less of an emphasis on production
                        and spent more time on the lyrics and melodies. They are kind of like impressions. I was super into Andrew McMahon 
                        and Alex G at the time so I think that comes through a bit.
                    </Card.Text>
                    <Card.Link href="https://open.spotify.com/album/2XMjWXqXldS09UsTZJRdtD?si=wCYx0bZRSUWCNif91ShNwQ">Spotify</Card.Link>
                </Card.Body>   
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/noguitars.jpeg" />
                <Card.Body>
                    <Card.Title>Zack Shaw, <span style={{fontStyle: 'italic'}}>No Guitars </span></Card.Title>
                    <Card.Text>
                        The title kind of says it all with this record. I love Hebrews by Say Anything and I had talked to Max about how 
                        he went into the studio and had the objective to write an album with no guitars. I was super into Death Cab for Cutie, 
                        The Cure, and Digital Ash by Bright Eyes and just wanted to make some pop songs with synths and drum machines. 
                        I think a big part of the drum machines was that is what I had available at the time. A fun record. 
                    </Card.Text>
                    <Card.Link href="https://open.spotify.com/album/55rgZ5HENYSME0HC8Bxh6d?si=a4ph6nEvRFmzrQmHfCpujw">Spotify</Card.Link>
                </Card.Body>   
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/rebuild.jpeg" />
                <Card.Body>
                    <Card.Title>Zack Shaw, <span style={{fontStyle: 'italic'}}>&apos;Until We Rebuild&apos; </span></Card.Title>
                    <Card.Text>
                        This is a collection of songs I wrote during the beginning of the pandemic. 
                        Ashleigh and I were living in the basement of her Mom&apos;s house. We had a ton of time on our hands for like three months
                        before going back to work and I spent so much time doom scrolling on twitter and feeling like the world was collapsing.
                        I think we all have this collective trauma we&apos;re all still healing from. This one is about as political as I&apos;ll get.
                    </Card.Text>
                    <Card.Link href="https://zackshaw.bandcamp.com/album/until-we-rebuild">Bandcamp</Card.Link>
                </Card.Body>   
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/psalm23.jpeg" />
                <Card.Body>
                    <Card.Title>Zack Shaw, <span style={{fontStyle: 'italic'}}>Psalm 23, a Prelude to Little Heretic </span></Card.Title>
                    <Card.Text>
                        This EP is one of my favorite batches of songs I have written. My wife and in-laws got me a macbook for my birthday and 
                        this was my first project I used Logic for. I feel like it&apos;s some of the most focused writing I have achieved. I&apos;ve always 
                        been a huge fan of americana and folk music and I think this is the closest I&apos;ve gotten to that. I wanted this to be the last release under 
                        my name and it seemed like a good place to end. 
                    </Card.Text>
                    <Card.Link href="https://zackshaw.bandcamp.com/album/psalm-23-a-prelude-to-little-heretic">Bandcamp</Card.Link>
                </Card.Body>   
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/lostitepd.jpeg" />
                <Card.Body>
                    <Card.Title>Little Heretic, <span style={{fontStyle: 'italic'}}>Lost in The Ever Present Distance </span></Card.Title>
                    <Card.Text>
                        This record is the first record I released under the Little Heretic moniker. I was on a leave of absence from work for
                        two support and worked really hard to grow and build myself back up. This is kind of a product of that and building my mind back up.
                        support and worked really hard to grow and build myself back up. This is kind of a product of that and building my mind back up.
                        I would reccomend listening to this either with nice headphones or really loud in the car.   
                    </Card.Text>
                    <Card.Link href="https://littleheretic.bandcamp.com/album/lost-in-the-ever-present-distance">Bandcamp</Card.Link>
                </Card.Body>   
                </Card>
                </Col>  
                <Col>
                <Card style={{ width: '20rem' }} className="mb-4 me-2">
                <Card.Img variant="top" src="./src/assets/lemonsoda.jpeg" />
                <Card.Body>
                    <Card.Title>Little Heretic, <span style={{fontStyle: 'italic'}}>Lemon Soda & Grenadine </span></Card.Title>
                    <Card.Text>
                        This EP is my most recent release. A collection of love songs. I put this out the year that I was married and its definitely
                        reflective of that. I kind of wanted to blend all the elements of the songs that I had worked on in the past and make a concise and 
                        special collection of songs. My cousin actually referenced one of the songs when he was officiating Ashleigh and I&spos;s wedding and it 
                        was really special. Kind of my most optimistic work up to this point. 
                    </Card.Text>
                    <Card.Link href="https://littleheretic.bandcamp.com/album/lemon-soda-grenadine-ep">Bandcamp</Card.Link>
                </Card.Body>   
                </Card>
                </Col>
            </Row>              
        </Container>
    </div>
  )
}