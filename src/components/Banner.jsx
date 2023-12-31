import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Backend Developer", "Frontend Developer", "Fullstack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length -1) : fulltext.substring(0, text.length+1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fulltext){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__fadeInDownBig" : ""}>
                                <span className="tagline">Welcome to my portfolio</span>
                                <h1>{`Hi I'm Franco Ortiz `}<br/>
                                <span className="wrap">{text}</span> </h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore nulla, rerum aspernatur corrupti dolore voluptatem odio expedita numquam porro ullam at natus sed iure ea. Debitis eveniet assumenda quasi inventore.</p>
                                <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle> </button>
                            </div>
                        }
                        </TrackVisibility>
                        </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="img-container">
                            <img src={headerImg} alt="Header Img"/>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}