import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/modules/header/components/Header'
import Footer from '@/modules/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Houses',
	description: 'Trident home',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
