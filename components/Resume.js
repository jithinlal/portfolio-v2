const Resume = () => {
	return (
		<div className='section resume'>
			<div className='content'>
				<div className='cols'>
					<div className='col col-md'>
						<div className='title'>
							<div className='title_inner'>Experience</div>
						</div>
						<div className='resume-items'>
							<div className='resume-item active'>
								<div className='date'>2022 - Present</div>
								<div className='name'>Senior software engineer - Gelato</div>
								<p>
									Built a service from the ground up to effectievly manage error
									reports created by customers as well as production partners
									using Golang and industry standard features like OpenTracing,
									CI/CD and AI and by following agile development practices
								</p>
							</div>
							<div className='resume-item'>
								<div className='date'>2020 - 2022</div>
								<div className='name'>
									Technical lead/Senior software engineer - NeoITO
								</div>
								<p>
									Lead a team consisting of front end engineers, backend
									engineers and QA to build a builder platform for a US client
								</p>
							</div>
							<div className='resume-item'>
								<div className='date'>2020 - 2020</div>
								<div className='name'>
									Developer - Kerala State Disaster Management’s Corona Safe
									open source community project
								</div>
								<p>
									Part of the open source community that took care of Corona
									Safe applications that helped Corona victims, doctors and
									officers to track the depth of the disease and provide data
									driven information via admin dashboards
								</p>
							</div>
							<div className='resume-item'>
								<div className='date'>2017 - 2020</div>
								<div className='name'>
									Full stack developer - Software Associates
								</div>
								<p>
									Responsible for working with clients such as CBRE to build
									their CMS portal using technologies like Laravel and ReactJs
								</p>
							</div>
						</div>
					</div>
					<div className='col col-md'>
						<div className='title'>
							<div className='title_inner'>Education</div>
						</div>
						<div className='resume-items'>
							<div className='resume-item'>
								<div className='date'>2013 - 2017</div>
								<div className='name'>
									National Institute of Technology (NIT) - Calicut
								</div>
								<p>Bachelor's in Computer Science and Technology</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Resume;
