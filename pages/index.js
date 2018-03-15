import Layout from '../comps/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = (props) => (
	<li>
		<Link as={`/p/${props.id}`} href={`/post?title=${ props.title }` }>
			<a>{ props.title }</a>
		</Link>
	</li>
)

export default () => (
	<Layout>
		<h1>My Blog</h1>
		<ul>
			<PostLink id='hello-nextjs' title='Hello Next.js' />
			<PostLink id='learn-nextjs' title='Learn Next.js' />
			<PostLink id='deploy-nextjs' title='Deploys apps with Zeit' />
		</ul>
	</Layout>
)
