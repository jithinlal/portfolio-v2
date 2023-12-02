const ContactsInfo = () => {
	return (
		<div className='section contacts section_' id='section-contacts'>
			<div className='content'>
				<div className='title'>
					<div className='title_inner'>Contacts</div>
				</div>
				<div className='service-items'>
					<div className='service-item'>
						<div className='icon'>
							<span className='ion ion-social-linkedin-outline' />
						</div>
						<div className='name'>LinkedIn</div>
						<p>
							<a
								href='https://www.linkedin.com/in/jithinlal-pr/'
								target='_blank'
							>
								Jitinlal
							</a>
						</p>
					</div>
					<div className='service-item'>
						<div className='icon'>
							<span className='ion ion-email' />
						</div>
						<div className='name'>Email</div>
						<p>
							<a href='mailto:jithinlal@protonmail.com'>
								jithinlal@protonmail.com
							</a>
						</p>
					</div>
					<div className='service-item'>
						<div className='icon'>
							<span className='ion ion-ios-location' />
						</div>
						<div className='name'>Address</div>
						<p>Calicut, Kerala, India</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ContactsInfo;
