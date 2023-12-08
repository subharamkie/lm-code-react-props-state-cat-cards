import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import CatCard from './components/cat_card';
import {useState} from 'react';
import Cat from './data/cat';
import catData from './data/catData';




function App(): JSX.Element {

	const [cats,setCats] = useState<Array<Cat>>(catData);
	 const catCount = cats.length;
	return (
		<>
			<Navbar />
			<Header count={catCount}/>

			<main>
				<div className='cards__wrapper'>
				
					{cats.map((cat,index) => {return <CatCard key={cat.id} catObject={cat} catIndex={index}/>}
					)}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
