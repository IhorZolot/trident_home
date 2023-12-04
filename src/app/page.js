import Catalog from '@/components/Catalog'
import Designs from '@/components/Designs'
import Interiors from '@/components/Interiors'
import Produce from '@/components/Produce'
import Order from '@/components/Order'
import Seo from '@/components/Seo'

export default function Home() {
	return (
		<main>
			<Catalog />
			<Designs />
			<Interiors />
			<Produce />
			<Order />
			<Seo />
		</main>
	)
}
