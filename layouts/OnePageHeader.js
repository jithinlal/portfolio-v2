'use client';
import { useEffect, useState } from 'react';

const OnePageHeader = () => {
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			const sections = document.querySelectorAll('.section_');
			const navLi = document.querySelectorAll('.top-menu li');
			let current = '';
			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				if (window.scrollY >= sectionTop - sectionHeight / 3) {
					current = section.getAttribute('id');
				}
			});

			navLi.forEach((li) => {
				if (current !== null) {
					li.classList.remove('active');
				}
				if (
					li.getElementsByTagName('a')[0].getAttribute('href') == `#${current}`
				) {
					li.classList.add('active');
				}
			});
		});
	}, []);

	const onClick = (e) => {
		e.preventDefault();
		document.querySelector('body').classList.toggle('loaded');
		setToggle(!toggle);
	};

	const [theme, setTheme] = useState(true);
	const toggleTheme = async () => {
		if (theme) {
			const link = document.createElement('link');
			link.href = 'css/template-dark/dark.css';
			link.type = 'text/css';
			link.rel = 'stylesheet';
			link.id = 'dynamic-css';
			document.head.appendChild(link);
		} else {
			const cssLink = document.getElementById('dynamic-css');
			if (cssLink) {
				document.head.removeChild(cssLink);
			}
		}

		setTheme((theme) => !theme);
	};

	return (
		<header className={toggle ? 'active' : ''}>
			<div className='head-top'>
				<a href='#' className='menu-btn' onClick={(e) => onClick(e)}>
					<span />
				</a>
				<div className='top-menu'>
					<ul>
						<li>
							<a href='#' onClick={toggleTheme}>
								<span
									className={theme ? 'ion ion-ios-moon' : 'ion ion-ios-sunny'}
									style={{ fontSize: 20 }}
								/>
							</a>
						</li>
						<li className=''>
							<a href='#section-resume' className='lnk'>
								Resume
							</a>
						</li>
						<li className=''>
							<a href='#section-clients' className='lnk'>
								Clients
							</a>
						</li>
						<li className=''>
							<a href='#section-blog' className='lnk'>
								Blog
							</a>
						</li>
						<li>
							<a href='#section-contacts' className='btn'>
								Contacts
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
export default OnePageHeader;
