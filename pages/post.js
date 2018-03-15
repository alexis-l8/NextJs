import Layout from '../comps/MyLayout'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const Post  = (props) => (
  <Layout>
    <div className="markdown">
      <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}/>
 </div>
 <h1>{ props.show.name }</h1>
 <style jsx >{`
     .markdown {
       font-family: 'Arial';
       color: red;
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
<p>{ props.show.summary.replace(/<[/]?p>/g, '') }</p>
<img src={ props.show.image.medium } />
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
