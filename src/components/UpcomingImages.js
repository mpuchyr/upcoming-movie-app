import React, { useEffect, useState } from 'react';
// import {Carousel} from '3d-react-carousal';
import uuidv4 from "uuid";
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import MovieInfo from './MovieInfo';
import Footer from './Footer';

const UpcomingImages = ({ upcoming }) => {
    const [carouselSlides, setCarouselSlides] = useState([])
    const [movieInfo, setMovieInfo] = useState(null)

    const handleOnClick = (movie) => {
        setMovieInfo(movie)
    }

    useEffect(() => {
        const url = "https://image.tmdb.org/t/p/w500"
        const createSlides = () => {
            const slides = upcoming.results.map((movie, index) => {
                const source = `${url}/${movie.poster_path}`
                if (index === 0) {
                    setMovieInfo(movie)
                }
                return {key: uuidv4(), content: <img src={source} alt={movie.id} onClick={() => handleOnClick(movie)}/>}
            })
            setCarouselSlides(slides)
        }

        createSlides()
    }, [])



    return (
        <div className="upcoming-movie-container">
            <h1 className="upcoming-movie-container-text">Upcoming Attractions</h1> 
            <div className="carousel-container">
                <Carousel 
                    slides={carouselSlides}
                    showNavigation={true}
                    animationConfig={config.gentle}
                />
            </div>
            <hr />
            {movieInfo && <MovieInfo movie={movieInfo}/>}
            <hr />
            <Footer />
        </div>
    )
}

export default UpcomingImages