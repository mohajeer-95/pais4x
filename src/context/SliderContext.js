import React, { createContext, useContext, useState, useEffect } from 'react';

const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
    const [sliderData, setSliderData] = useState(null);
    const [carouselData, setCarouselData] = useState(null);
    const [brokersData, setBrokersData] = useState(null);
    const [loadingBrokers, setLoadingBrokers] = useState(true);
    const [loadingSlider, setLoadingSlider] = useState(true);
    const [loadingCarousel, setLoadingCarousel] = useState(true);


    function shuffleArray(array) {
        const shuffledArray = [...array]; // Create a shallow copy of the original array

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
            // Swap elements at i and j
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }

    useEffect(() => {
        const fetchSliderData = async () => {
            try {
                const response = await fetch("https://lab.app2serve.com/public/api/slider");
                const result = await response.json();
                if (result.status === 1) {
                    setSliderData(result.sliders);
                }
            } catch (error) {
                console.error('Error fetching slider data:', error);
            } finally {
                setLoadingSlider(false);
            }
        };


        const fetchCarouselData = async () => {
            var carousleDublecated = []
            try {
                const response = await fetch("https://lab.app2serve.com/public/api/broker-carousel");
                const result = await response.json();
                if (result.status === 1) {
                    result.broker_carousel.map((item, index) => {
                        if (result.broker_carousel.length < 3) {
                            carousleDublecated.push(item)
                            carousleDublecated.push(item)
                            carousleDublecated.push(item)
                            carousleDublecated.push(item)
                            carousleDublecated.push(item)
                        } else if (result.broker_carousel.length < 6) {
                            carousleDublecated.push(item)
                            carousleDublecated.push(item)
                            carousleDublecated.push(item)
                        } else if (result.broker_carousel.length < 8) {
                            carousleDublecated.push(item)
                            carousleDublecated.push(item)
                        }
                    })
                    setCarouselData(shuffleArray(carousleDublecated));
                }
            } catch (error) {
                console.error('Error fetching carouser data:', error);
            } finally {
                setLoadingCarousel(false);
            }
        };



        const fetchBrokersData = async () => {
            try {
                const response = await fetch("https://lab.app2serve.com/public/api/brokers");
                const result = await response.json();
                if (result.status === 1) {
                    console.log('result.brokers =============>> ', result.brokers);

                    setBrokersData(result.brokers);
                }
            } catch (error) {
                console.error('Error fetching brokers data:', error);
            } finally {
                setLoadingBrokers(false);
            }
        };


        fetchSliderData();
        fetchCarouselData();
        fetchBrokersData();
    }, []);

    return (
        <SliderContext.Provider value={{ brokersData, loadingBrokers, carouselData, loadingCarousel, sliderData, loadingSlider }}>
            {children}
        </SliderContext.Provider>
    );
};

export const useSlider = () => useContext(SliderContext);