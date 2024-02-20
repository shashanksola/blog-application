import { Audio } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import './index.css'
import { useState, useEffect } from 'react'



const BlogItemDetails = () => {
  const { id } = useParams()
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getBlogItemData() {

      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()

      const updatedData = {
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        avatarUrl: data.avatar_url,
        author: data.author,
      }
      setBlogData(updatedData)
      setIsLoading(false)
    }
    getBlogItemData();
  })


  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData

    return (
      <div style={{display:'flex', flexDirection: 'column'}}>
        <h2>{title}</h2>
        <div className="author-details">
          <img className="avatar" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  return (
    <div className="blog-container">
      {isLoading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        renderBlogItemDetails()
      )}
    </div>
  )
}

export default BlogItemDetails
