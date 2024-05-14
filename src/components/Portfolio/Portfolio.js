import React from 'react';
import {Container} from 'react-bootstrap';
import './Portfolio.css';
import Data from './portfolioData';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Container>
               <div className="portfolio_txt">
                    <h2>Portfolio</h2>
                </div> 
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <div className='portfolio_content'>
                        {Data.map((data, index)=>(
                            <div className='portfolio_row' key={index}>
                                <div className="portfolio_img">
                                <LazyLoadImage
                alt={"student-img"}
                effect="blur"
                wrapperProps={{
                    style: {transitionDelay: "0.4s"},
                }}
                src={data.imgUrl} />
                                    {/* <img className="img-fluid" src={data.imgUrl || <Skeleton />} /> */}
                                </div>
                                <div className="portfolio_text">
                                    <a href="#"><h3>{data.paragrf || <Skeleton />}</h3></a>
                                    <p>{data.title || <Skeleton />}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SkeletonTheme>
            </Container>
        </div>
    );
};

export default Portfolio;