import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroTop from './(blog)/HeroTop'
import ArticleCard from '@/components/custom/ArticleCard'

const MainPage = () => {
    return (
        <section>
            {/* <HeroSection/> */}
            {/* top hero */}
            <HeroTop />

            {/* end of top hero */}
            <div className='flex gap-4 justify-center'>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <div className='grid grid-cols-12 gap-8'>
                            <div className='col-span-4'>
                                <ArticleCard title="Power of Javascript"
                                    author="Rico Kurnia"
                                    date="12 Juni 2024"
                                    content="Learn about the reduce method in JavaScript arrays and how it."
                                    imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
                            </div>
                            <div className='col-span-4'>
                                <ArticleCard title="Power of Javascript"
                                    author="Rico Kurnia"
                                    date="12 Juni 2024"
                                    content="Learn about the reduce method in JavaScript arrays and how it can  lorem10 iejsif sefshefe fefe optimize code for speed and efficiency."
                                    imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
                            </div>
                            <div className='col-span-4'>
                                <ArticleCard title="Power of Javascript"
                                    author="Rico Kurnia"
                                    date="12 Juni 2024"
                                    content="Learn about the reduce method in JavaScript arrays and how it can optimize code for speed and efficiency."
                                    imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
                            </div>
                            <div className='col-span-4'>
                                <ArticleCard title="Power of Javascript"
                                    author="Rico Kurnia"
                                    date="12 Juni 2024"
                                    content="Learn about the reduce method in JavaScript arrays and how it can optimize code for speed and efficiency."
                                    imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
                            </div>

                        </div>
                    </TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>
            </div>


        </section>
    )
}

export default MainPage