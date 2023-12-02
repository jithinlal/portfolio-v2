const About = () => {
	return (
		<div className='section about section_' id='section-resume'>
			<div className='content'>
				<div className='title'>
					<div className='title_inner'>About Me</div>
				</div>
				<div className='image'>
					<img src='images/man1.jpg' alt='' />
				</div>
				<div className='desc'>
					<p>
						With six years of experience in software development, my expertise
						lies in building and optimizing microservice architectures,
						cloud-based solutions and web applications. Currently working as a
						Senior Software Engineer within Customer support engineering team at
						Gelato, I spearheaded writing a micro service that significantly
						enhanced issue resolution efficiency, reducing ticket duplications
						and increased ticket deflection rate. I am deeply committed to
						user-centric design, continuous learning, and fostering
						collaboration. Aiming to evolve into a technical lead, I aspire to
						be a key contributor in a core engineering team, driving innovation
						and excellence.
					</p>
					<div className='info-list'>
						<ul>
							<li>
								<strong>Name:</strong> Jithinlal
							</li>
							<li>
								<strong>Job:</strong> Senior engineer @ Gelato
							</li>
							<li>
								<strong>Citizenship:</strong> Indian
							</li>
							<li>
								<strong>Residence: </strong> Kerala
							</li>
							<li>
								<strong>E-mail:</strong> jithinlal@protonmail.com
							</li>
						</ul>
					</div>
					<div className='bts'>
						<a
							href='docs/resume.pdf'
							className='btn fill'
							download
							data-text='Download Resume'
						>
							Download Resume
						</a>
					</div>
				</div>
				<div className='clear' />
			</div>
		</div>
	);
};
export default About;
