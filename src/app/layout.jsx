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
			<link rel="icon" sizes="96x96" type="image/png" href="/favicon.png" />
			<body className={inter.className}>
				<div id="box">{children}</div>
				<script src="https://smtpjs.com/v3/smtp.js"></script>
			</body>
		</html>
	);
}
