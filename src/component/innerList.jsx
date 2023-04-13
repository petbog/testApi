import axios from 'axios'
import { useEffect, useState } from 'react'
import classes from './innerList.module.css'


const InnerList = () => {
    const [value, setValue] = useState([])
 console.log(value)

    const video = value.items
    useEffect(() => {
        const getVideo = async () => {
            const api_key = `AIzaSyBGiRuZ-YJLoo3fiRHxoWpwZKiZpOXDufw`
            const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet,id&order=title&maxResults=5&q=car`)
            return setValue(data)

        }
        getVideo()
    }, [])

    return (
        <div className={classes.container}>
            {/* <div className={classes.videoContainer}>
                {
                    video && video.map((item, i) => <div key={i} >       
                        <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='allowfullscreen'></iframe>
                    </div>)
                }

            </div> */}

        </div>
    )
}

export default InnerList