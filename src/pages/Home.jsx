import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from "../components"
import { useSelector } from 'react-redux'

function Home() {

    const [posts, setPosts] = useState([])

    const postData = useSelector(state => state.post.posts)
    useEffect(()=>{
        if(postData) {
            setPosts(postData.documents)
        }
    },[])

    if(posts.length === 0) {
        return(
            <div className='w-full py-8 mt-4 text-center'>
               <Container>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl'>
                            No posts available, please login to read posts
                        </h1>
                    </div>
                </div>
               </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts?.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home