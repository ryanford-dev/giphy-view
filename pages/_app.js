import '@/styles/vendor/reset.css'
import '@/styles/globals.css'

import Navbar from '@/components/navbar'
import AttributionNotice from '@/components/attribution'


const app = ({ Component, pageProps }) => {
	return (
		<>
			<Navbar
				title="Giphy View"
			/>
			<Component {...pageProps} />
			<AttributionNotice />
		</>
	)
}

export default app;
