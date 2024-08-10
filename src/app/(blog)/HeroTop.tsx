import React from 'react'
import ArticleCard from '@/components/custom/ArticleCard'
import ArticleCardHorizontal from '@/components/custom/HorizontalCard'
import HeroCard from '@/components/custom/HeroCard'
import Heroimg from '../assets/hero-img.png'
import Image from 'next/image'
const HeroTop = () => {
    return (
        <div className='grid grid-cols-12 lg:mt-12'>
            <div className='col-span-12 lg:col-span-8'>
                <ArticleCardHorizontal
                    title="Implement JWT Auth in NestJs"
                    description="What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    imgSrc={`https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png`}
                />
                <ArticleCardHorizontal
                    title="Implement JWT Auth in NestJs"
                    description="What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    imgSrc={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png`}
                />
            </div>
            <div className='col-span-12 lg:col-span-4'>
                <HeroCard
                    title="Power of Javascript"
                    author="Rico Kurnia"
                    date="12 Juni 2024"
                    content="Learn about the reduce method in JavaScript arrays and how it can optimize code for speed and efficiency."
                    imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                />
                {/* <Image className='w-full h-full' src={Heroimg} /> */}
            </div>
        </div>
    )
}

export default HeroTop