import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Aaron Celia",
	description: "My Portfolio"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			{/* <script
				src="https://kit.fontawesome.com/6b83d06e00.js"
				crossorigin="anonymous"></script> */}
			<body className={inter.className}>
				<div id='box'>
					{children}
				</div>
			</body>
		</html>
	);
}
