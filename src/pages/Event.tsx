import { useParams } from 'react-router-dom'

import { Video } from '../components/Video'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'


export function Event(){
    const { slug } = useParams<{slug: string}>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className='flex flex-1'>
                {
                    slug ? 
                    <Video lessonSlug={slug}/> : 
                    <div className='flex flex-1 flex-col justify-between'>
                        <div/>
                        <Footer/>
                    </div> 
                }
                <Sidebar/>
            </main>
        </div>
    )
}