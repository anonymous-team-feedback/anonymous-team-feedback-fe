import React from 'react'

const PostFeedbackSuggestions = props => {
  const options = props.results.map(res => (
    <li key={res.id}>
      {res.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default PostFeedbackSuggestions