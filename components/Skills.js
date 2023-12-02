'use client';
export const DesignSkills = () => {
	return (
		<div className='section skills'>
			<div className='content'>
				<div className='title'>
					<div className='title_inner'>Design Skills</div>
				</div>
				<div className='skills'>
					<ul>
						<li>
							<div className='name'>Web Design</div>
							<div className='progress'>
								<div className='percentage' style={{ width: '70%' }}>
									<span className='percent'>70%</span>
								</div>
							</div>
						</li>
						<li>
							<div className='name'>Illustrations</div>
							<div className='progress'>
								<div className='percentage' style={{ width: '90%' }}>
									<span className='percent'>90%</span>
								</div>
							</div>
						</li>
						<li>
							<div className='name'>Photoshop</div>
							<div className='progress'>
								<div className='percentage' style={{ width: '75%' }}>
									<span className='percent'>75%</span>
								</div>
							</div>
						</li>
						<li>
							<div className='name'>Graphic Design</div>
							<div className='progress'>
								<div className='percentage' style={{ width: '80%' }}>
									<span className='percent'>80%</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export const LanguagesSkills = () => {
	useEffect(() => {
		glitcheUtils.dotResize();
		setTimeout(glitcheUtils.createSkillsDot(), 1000);
	}, []);

	return (
		<div className='section skills'>
			<div className='content'>
				<div className='title'>
					<div className='title_inner'>Languages Skills</div>
				</div>
				<div className='skills dotted'>
					<ul>
						<li>
							<div className='name'>English</div>
							<div className='progress'>
								<div className='percentage' style={{ width: '90%' }}>
									<span className='percent'>90%</span>
								</div>
							</div>
						</li>
						<li>
							<div className='name'>German</div>
							<div className='progress '>
								<div className='percentage' style={{ width: '70%' }}>
									<span className='percent'>70%</span>
								</div>
							</div>
						</li>
						<li>
							<div className='name'>Italian</div>
							<div className='progress '>
								<div className='percentage' style={{ width: '55%' }}>
									<span className='percent'>55%</span>
								</div>
							</div>
						</li>
						<li>
							<div className='name'>French</div>
							<div className='progress '>
								<div className='percentage' style={{ width: '85%' }}>
									<span className='percent'>85%</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export const CodingSkills = () => {
	const skills = [
		{ id: 1, title: 'Golang', value: 90 },
		{ id: 2, title: 'Database', value: 90 },
		{ id: 3, title: 'JavaScript (NodeJs, ReactJs)', value: 95 },
		{ id: 5, title: 'Docker/Kubernetes', value: 90 },
		{ id: 6, title: 'Micro service architecture', value: 90 },
	];
	return (
		<div className='section skills'>
			<div className='content'>
				<div className='title'>
					<div className='title_inner'>Coding Skills</div>
				</div>
				<div className='skills circles'>
					<ul>
						{skills.map((skill) => (
							<li key={skill.id}>
								<div className='name'>{skill.title}</div>
								<div className={`progress p${skill.value}`}>
									<div
										className='percentage'
										style={{ width: `${skill.value}%` }}
									>
										<span className='percent'>{skill.value}%</span>
									</div>
									<span>{skill.value}%</span>
									<div className='slice'>
										<div className='bar' />
										<div className='fill' />
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export const Knowledge = () => {
	return (
		<div className='section skills'>
			<div className='content'>
				<div className='title'>
					<div className='title_inner'>Knowledge</div>
				</div>
				<div className='skills list'>
					<ul>
						<li>
							<div className='name'>Backend development</div>
						</li>
						<li>
							<div className='name'>Micro service architecture</div>
						</li>
						<li>
							<div className='name'>Front end skills</div>
						</li>
						<li>
							<div className='name'>Database design</div>
						</li>
						<li>
							<div className='name'>Cloud services</div>
						</li>
						<li>
							<div className='name'>CI/CD</div>
						</li>
						<li>
							<div className='name'>Agile</div>
						</li>
						<li>
							<div className='name'>AI</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

import { glitcheUtils } from '@/utility';
import { Fragment, useEffect } from 'react';
const Skills = ({
	design = false,
	languages = false,
	coding = true,
	knowledge = true,
}) => {
	return (
		<Fragment>
			{design && <DesignSkills />}
			{languages && <LanguagesSkills />}
			{coding && <CodingSkills />}
			{knowledge && <Knowledge />}
		</Fragment>
	);
};
export default Skills;
