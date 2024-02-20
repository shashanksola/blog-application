// Write your JS code here

import './index.css'

import { Component } from 'react'

import { Audio } from 'react-loader-spinner'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = { isLoading: true, blogListItems: [] }

  componentDidMount() {
    this.fetchBlogsData()
  }

  fetchBlogsData = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()

    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))

    this.setState({ isLoading: false, blogListItems: updatedData })
  }

  render() {
    const { isLoading, blogListItems } = this.state
    return (
      <div>
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
          <ul>
            {blogListItems.map(blog => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
