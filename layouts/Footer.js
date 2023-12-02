const Footer = () => {
	return (
		<footer>
			<div className='soc'>
				<a target='_blank' href='https://github.com/jithinlal'>
					<span className='ion ion-social-github' />
				</a>
				<a target='_blank' href='https://www.linkedin.com/in/jithinlal-pr/'>
					<span className='ion ion-social-linkedin-outline' />
				</a>
				<a target='_blank' href='https://jithin-lal.blogspot.com/'>
					<span className='ion ion-social-rss-outline' />
				</a>
			</div>
			<div className='copy'>
				© {new Date().getFullYear()} Jithinlal. All rights reserved.
			</div>
			<div className='clr' />
		</footer>
	);
};
export default Footer;
