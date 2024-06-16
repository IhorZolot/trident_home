import { Inter } from 'next/font/google'
import Head from 'next/head'

import './globals.css'
import { Header } from '@/modules/header/components/Header'
import Footer from '@/modules/footer/Footer'
import ScrollToTopButton from '@/shared/Button/ScrollToTopButton'
import { HousesProvider } from './context/HousesProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Houses',
	description: 'Trident-home',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
			<body className={inter.className}>
				<HousesProvider>
					<Header />
					{children}
					<Footer />
					<ScrollToTopButton />
				</HousesProvider>
			</body>
		</html>
	)
}
