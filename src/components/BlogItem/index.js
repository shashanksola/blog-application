import { Link } from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const { blog } = props
  const { id, imageUrl, topic, title, avatarUrl, author } = blog

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      {
        <div className="item-container">
          <img className="main-image" src={imageUrl} alt={`item${id}`} />
          <div>
            <h1>{title}</h1>
            <p>{topic}</p>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      }
    </Link>
  )
}

export default BlogItem
