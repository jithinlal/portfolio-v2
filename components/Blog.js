'use client';
import Isotope from 'isotope-layout';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

const Blog = ({ dark }) => {
	// Isotope
	const isotope = useRef();
	const [filterKey, setFilterKey] = useState('*');
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope('.blog-items', {
				itemSelector: '.box-item',
				// layoutMode: "fitRows",
				percentPosition: true,
				masonry: {
					columnWidth: '.box-item',
				},
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				},
			});
		}, 4000);
	}, []);
	useEffect(() => {
		if (isotope.current) {
			filterKey === '*'
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
		}
	}, [filterKey]);

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch(
			'https://www.googleapis.com/blogger/v3/blogs/8036422199805021206/posts?key=AIzaSyANvPLTLY3cHrBL3qD4Sy2-WVVJH4qNI-k&maxResults=6',
		)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				setPosts(
					result.items.map((item, key) => {
						let url = `https://random.imagecdn.app/${600 + key}/${600 + key}`;

						return {
							id: item.id,
							content: item.content,
							title: item.title,
							url: item.url,
							img: url,
							date: dayjs(item.updated).format('MMMM DD, YYYY'),
						};
					}),
				);
			});
	}, []);

	return (
		<div className='section blog section_' id='section-blog'>
			<div className='content'>
				<div className='title'>
					<div className='title_inner'>Latest Posts</div>
				</div>
				<div className='box-items blog-items'>
					{posts.map((blog) => (
						<div className='box-item' key={blog.id}>
							<div className='image'>
								<a href={blog.url} target='_blank'>
									<img src={blog.img} />
									<span className='info'>
										<span className='centrize full-width'>
											<span className='vertical-center'>
												<span className='ion ion-ios-book-outline' />
											</span>
										</span>
									</span>
								</a>
							</div>
							<div className='desc'>
								<div className='date'>{blog.date}</div>
								<a href={blog.url} target='_blank' className='name'>
									{blog.title}
								</a>
							</div>
						</div>
					))}
				</div>
				<div className='clear' />
			</div>
		</div>
	);
};
export default Blog;
