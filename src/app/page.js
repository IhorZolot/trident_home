import Catalog from '@/components/Invite'
import Designs from '@/components/Designs'
import Interiors from '@/components/Interiors'
import Produce from '@/components/Produce'
import Order from '@/components/Order'
import Seo from '@/components/Seo'
import ScrollToTopButton from '@/shared/Button/ScrollToTopButton'

export default function Home() {
	return (
		<main>
			<Catalog />
			<Designs />
			<Interiors />
			<Produce />
			<Order />
			<Seo />
			<ScrollToTopButton />
		</main>
	)
}
