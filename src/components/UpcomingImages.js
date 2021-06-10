import React, { useEffect, useState } from 'react';
// import {Carousel} from '3d-react-carousal';
import uuidv4 from "uuid";
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';

const UpcomingImages = ({ upcoming }) => {
    const [carouselSlides, setCarouselSlides] = useState([])

    useEffect(() => {
        const url = "https://image.tmdb.org/t/p/w500"
        const createSlides = () => {
            const slides = upcoming.results.map(movie => {
                const source = `${url}/${movie.poster_path}`
                return {key: uuidv4(), content: <img src={source} alt={movie.id} />}
            })
            setCarouselSlides(slides)
        }

        createSlides()
    }, [])

    console.log(upcoming)


    return (
        <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
            Upcoming Images Placeholder
            <Carousel 
                slides={carouselSlides}
                showNavigation={true}
                animationConfig={config.gentle}
            />
        </div>
    )
}

export default UpcomingImages