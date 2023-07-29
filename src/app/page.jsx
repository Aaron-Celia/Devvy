"use client";
import Image from "next/image";
import profilePic from "../../public/profile-pic.JPG";
import { Lobster } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { BottomNavigation, BottomNavigationAction, useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useState } from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	weight: "500"
});

const lobster = Lobster({
	subsets: ["latin"],
	weight: "400"
});

export default function Home() {
  const [page, setPage] = useState('home')
	const onPhone = useMediaQuery("(max-width: 700px)");
  if(page === 'home'){
    return (
			<main className="h-fit w-screen flex flex-col items-center">
				<Image
					className="rounded-full mt-10 drop-shadow-2xl"
					src={profilePic}
					alt="Profile Picture"
					height={256}
					width={256}
				/>
				<h3 className={`${lobster.className} text-4xl mt-5 drop-shadow-xl`}>
					Aaron Celia
				</h3>
				<h4 className={`${robotoMono.className} text-xl`}>Software Engineer</h4>
				<br />
				<br />
				<br />
				<br />
				<h2 className="header underline">About Me</h2>
				<p
					className={`${onPhone ? "mx-10" : "mx-20"} mt-5 text-center text-xl`}>
					Highly skilled and motivated Marine Corps veteran turned Software
					Engineer, proficient in a wide array of technologies including
					TypeScript, JavaScript, Python, Node.js, Express.js, React, Redux,
					SQL, and more. A dedicated problem-solver having a growth mindset and
					a passion for innovation with a track record of delivering robust and
					scalable solutions. Eager to leverage my diverse background and
					technical expertise to drive impactful and transformative projects as
					part of a dynamic software development team.
				</p>
				<h2 className="header underline mt-10 mb-5">Skills</h2>
				<div className="flex flex-wrap justify-center">
					<ul className="mx-5 text-center">
						<li className="text-lg">JavaScript</li>
						<li className="text-lg">Typescript</li>
						<li className="text-lg">Python</li>
						<li className="text-lg">SQL</li>
						<li className="text-lg">Swift</li>
						<li className="text-lg">HTML</li>
						<li className="text-lg">CSS</li>
					</ul>
					<ul className="mx-5 text-center">
						<li className="text-lg">React</li>
						<li className="text-lg">Redux</li>
						<li className="text-lg">Next.Js</li>
						<li className="text-lg">Express</li>
						<li className="text-lg">Scrapy</li>
						<li className="text-lg">React Native</li>
						<li className="text-lg">Webpack</li>
						<li></li>
					</ul>
					<ul className="mx-5 text-center">
						<li className="text-lg">Node.Js</li>
						<li className="text-lg">PostgreSQL</li>
						<li className="text-lg">MongoDB</li>
						<li className="text-lg">Prisma</li>
						<li className="text-lg">Mongoose</li>
						<li className="text-lg">Sequelize</li>
					</ul>
				</div>
				<h2 className="header underline mt-10 mb-5">Education</h2>
				<div className="flex flex-col items-center mb-60">
					<h2 className="font-bold text-2xl">Fullstack Academy</h2>
					<h4 className="font-semibold text-xl">Software Engineering Certificate</h4>
					<Link className="text-blue-500 underline text-lg" href="https://docs.google.com/document/d/1SmvxRmpF2b6mUAEiWWlVBdOeRfErRUVaXwEewc92ptw/edit?usp=sharing" target="_blank">Recommendation Letter</Link>
				</div>
				<BottomNavigation
					showLabels
					sx={{
						backgroundColor: "#000000",
						width: onPhone ? "70vw" : "40vw",
						// marginLeft: onPhone ? "15vw" : "30vw",
						position: "fixed",
						bottom: "5vw",
						borderRadius: "10cqi"
					}}>
					<BottomNavigationAction
						sx={{ color: "white" }}
						label="Home"
						onClick={() => setPage("home")}
						icon={<HomeIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						sx={{ color: "white" }}
						label="My Work"
						onClick={() => setPage("projects")}
						icon={<CodeIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						sx={{ color: "white" }}
						label="Contact"
						onClick={() => setPage("contact")}
						icon={<AlternateEmailIcon fontSize="large" />}
					/>
				</BottomNavigation>
			</main>
		);
  }
  if(page === 'projects'){
    return (
			<main className="h-fit w-screen flex flex-col items-center">
				<h1 className={`${lobster.className} text-5xl my-10`}>Projects</h1>
				<h2 className="header2 underline mt-20">Weather App</h2>
				<div className={`${onPhone ? "mx-5" : "mx-80"} mt-5 flex flex-col`}>
					<ul>
						<li className="my-10 text-lg">
							Implementation of real-time weather data, user-friendly UI, and
							global weather forecast search feature.
						</li>
						<li className="my-10 text-lg">
							Integrated Geolocation API for user tracking; employed weather
							data API for real-time updates; developed dynamic UI; introduced
							global weather search feature with autocomplete function.
						</li>
						<li className="my-10 text-lg">
							Effectively developed a weather app with real-time updates and
							user-friendly features, earning positive user feedback and daily
							user engagement.
						</li>
						<li className="my-10 text-lg">
							<em>
								<strong>Skills:</strong>
							</em>{" "}
							Full Stack Development, API Integration, Geolocation Technology,
							UI/UX Design, User Experience Enhancement, Real-time Data
							Retrieval, Agile Methodologies.
						</li>
					</ul>
				</div>
				<div className="flex mb-10">
					<Link
						href="https://github.com/Aaron-Celia/weather-app"
						target="_blank"
						className="bg-black hover:bg-slate-800 duration-150 rounded-xl h-10 w-40 text-white flex items-center justify-center font-bold mx-5">
						View Code on <GitHubIcon sx={{ marginLeft: "0.5em" }} />
					</Link>
					<Link
						href="https://nextweatherapp-a399e9163fb6.herokuapp.com/"
						target="_blank"
						className="bg-blue-600 hover:bg-blue-500 duration-150 rounded-xl h-10 w-40 text-white flex items-center justify-center font-bold mx-5">
						View Site
					</Link>
				</div>
				<h2 className="header2 underline mt-20">Live Messaging App</h2>
				<div className={`${onPhone ? "mx-5" : "mx-80"} mt-5 flex flex-col`}>
					<ul>
						<li className="my-10 text-lg">
							Engineered aesthetically appealing and interactive UI/UX
							components using state-of-the-art design principles, thus ensuring
							an exceptional user experience, while also pioneering a real-time
							messaging application leveraging WebSocket technology, to promote
							frictionless and instantaneous user interactions. The process
							showcased competencies in JavaScript frameworks, UX design
							methodologies, and real-time communication protocols.
						</li>
						<li className="my-10 text-lg">
							Designing an accessible user interface leveraging Google OAuth for
							seamless sign-in, implementing robust data storage solutions for
							efficient information management, and employing real-time
							communication protocols for dynamic data exchange.
						</li>
						<li className="my-10 text-lg">
							Combined React functionality with a real time subscription
							function to deliver messages in real-time, as soon as they’re
							sent.
						</li>
						<li className="my-10 text-lg">
							Optimized global state management via Redux.
						</li>
						<li className="my-10 text-lg">
							<em>
								<strong>Skills:</strong>
							</em>{" "}
							Application state management, data manipulation, real-time
							communication.
						</li>
					</ul>
				</div>
				<Link
					href="https://github.com/Aaron-Celia/chat-app"
					target="_blank"
					className="bg-black hover:bg-slate-800 duration-150 rounded-xl h-10 w-40 text-white flex items-center justify-center font-bold mb-10">
					View Code on <GitHubIcon sx={{ marginLeft: "0.5em" }} />
				</Link>
				<h2 className="header2 underline mt-10">E-commerce Platform</h2>
				<div className={`${onPhone ? "mx-5" : "ml-10"} mt-5 flex flex-col`}>
					<ul>
						<li className="my-10 text-lg">
							Tasked with engineering a comprehensive and fully-functional
							e-commerce site for video games.
						</li>
						<li className="my-10 text-lg">
							Developed robust site with user/guest shopping and admin
							functionalities.
						</li>
						<li className="my-10 text-lg">
							Utilized various react functionalities and hooks to create a live
							search and filter functionality that updates in real-time.
						</li>
						<li className="my-10 text-lg">
							Designed back-end relational database and built a custom API to
							interact with the front end of the application.
						</li>
						<li className="my-10 text-lg">
							<em>
								<strong>Skills:</strong>
							</em>{" "}
							Database design, problem-solving, e-commerce development, secure
							payment integration.
						</li>
					</ul>
				</div>
				<Link
					href="https://github.com/Aaron-Celia/GraceShopperFinal"
					target="_blank"
					className="bg-black hover:bg-slate-800 duration-150 rounded-xl h-10 w-40 text-white flex items-center justify-center font-bold mb-60">
					View Code on <GitHubIcon sx={{ marginLeft: "0.5em" }} />
				</Link>
				<BottomNavigation
					showLabels
					sx={{
						backgroundColor: "#000000",
						width: onPhone ? "70vw" : "40vw",
						// marginLeft: onPhone ? "15vw" : "30vw",
						position: "fixed",
						bottom: "5vw",
						borderRadius: "10cqi"
					}}>
					<BottomNavigationAction
						sx={{ color: "white" }}
						label="Home"
						onClick={() => setPage("home")}
						icon={<HomeIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						sx={{ color: "white" }}
						label="My Work"
						onClick={() => setPage("projects")}
						icon={<CodeIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						sx={{ color: "white" }}
						label="Contact"
						onClick={() => setPage("contact")}
						icon={<AlternateEmailIcon fontSize="large" />}
					/>
				</BottomNavigation>
			</main>
		);
  }
  if (page === 'contact'){
    return (
			<main className="h-fit w-screen flex flex-col items-center">
				<h1 className={`${lobster.className} text-5xl my-10`}>Contact Me</h1>
				<form className=""></form>
				<BottomNavigation
					showLabels
					sx={{
						backgroundColor: "#000000",
						width: onPhone ? "70vw" : "40vw",
						// marginLeft: onPhone ? "15vw" : "30vw",
						position: "fixed",
						bottom: "5vw",
						borderRadius: "10cqi"
					}}>
					<BottomNavigationAction
						sx={{ color: "white" }}
						label="Home"
						onClick={() => setPage("home")}
						icon={<HomeIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						sx={{ color: "white" }}
						label="My Work"
						onClick={() => setPage("projects")}
						icon={<CodeIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						sx={{ color: "white" }}
						label="Contact"
						onClick={() => setPage("contact")}
						icon={<AlternateEmailIcon fontSize="large" />}
					/>
				</BottomNavigation>
			</main>
		);
  }
}
