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
			<main className="h-fit w-screen flex items-center">
				<div></div>
				<div></div>
				<div></div>
				<BottomNavigation
					showLabels
					sx={{
						backgroundColor: "#000000",
						width: onPhone ? "70vw" : "40vw",
						marginLeft: onPhone ? "15vw" : "30vw",
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
			<main className="h-fit w-screen flex items-center">
				<div></div>
				<div></div>
				<div></div>
				<BottomNavigation
					showLabels
					sx={{
						backgroundColor: "#000000",
						width: onPhone ? "70vw" : "40vw",
						marginLeft: onPhone ? "15vw" : "30vw",
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
