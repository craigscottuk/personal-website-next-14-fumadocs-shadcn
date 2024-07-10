'use client';
import * as React from 'react';
import Video from 'next-video';
import videoData from '@/lib/data';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function BikeVidCarousel() {
  const [apiSecondCarousel, setApiSecondCarousel] = React.useState();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleTabChange = (newValue) => {
    const newIndex = parseInt(newValue, 10); // Ensure the index is a number
    setCurrentIndex(newIndex);
    apiSecondCarousel?.scrollTo(newIndex, false); // Update the carousel to the new index
  };

  React.useEffect(() => {
    const onSecondCarouselChange = () => {
      const newIndex = apiSecondCarousel.selectedScrollSnap();
      setCurrentIndex(newIndex); // Update state to keep tabs in sync with the carousel
    };

    apiSecondCarousel?.on('select', onSecondCarouselChange);

    return () => apiSecondCarousel?.off('select', onSecondCarouselChange);
  }, [apiSecondCarousel]);

  return (
    <div>
      {/* Tabs Component */}
      <Tabs
        value={currentIndex.toString()}
        onValueChange={handleTabChange}
        className='mx-auto mb-4 w-[400px]'
      >
        <TabsList>
          {videoData.map((video, index) => (
            <TabsTrigger className=' mr-2' value={index.toString()} key={index}>
              {`${index + 1}. ${video.title}`}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Carousel Component */}
      <Carousel
        setApi={setApiSecondCarousel}
        opts={{ align: 'center', loop: false }}
      >
        <CarouselContent className='-ml-2 md:-ml-4'>
          {videoData.map((video, index) => (
            <CarouselItem
              key={index}
              className='basis-10/12 cursor-pointer'
              onClick={() => handleTabChange(index.toString())}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Video
                    src={video.videoSource}
                    autoplay={true}
                    muted={true}
                    loop={true}
                    controls={false}
                    accentColor='#ffff00'
                  />
                </CardContent>
                <CardFooter>
                  <Button>{video.footerContent}</Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
