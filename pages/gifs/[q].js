import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ResultsPage from '@/components/results'

const Results = () => {
  const router = useRouter()
	const [ data, setData ] = useState(null);
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
	const api_url = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=`;
  let { q } = router.query;
	q = decodeURIComponent(q);
	useEffect(() => {
		fetch(api_url + q)
			.then(res => res.json())
			.then(res => {
				setData(res);
			});
	}, [ q ])

  return (
		<ResultsPage data={data} q={q} />
	)
}

export default Results;

