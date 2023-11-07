import React, { useEffect, useState } from 'react' 
import {Container, PostCard} from "../components"
import { useSelector } from 'react-redux'

function AllPosts() {
    const [posts, setPosts] = useState([])

    const postData = useSelector(state => state.post.posts)

    useEffect(() => {
        if(postData) {
            setPosts(postData.documents)
        }
    },[])
    
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap
            '>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts