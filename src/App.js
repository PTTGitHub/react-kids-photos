import "./App.css";
import { datas } from "./datas.js";

function App() {
	return (
		<article className="container">
			{datas.map((data) => {
				return <Card key={data.id} {...data} />;
			})}
		</article>
	);
}

function Card(props) {
	const { title, source, img } = props;
	return (
		<div className="card">
			<img src={img} alt="" />
			<h3>{title}</h3>
			<p>{source}</p>
		</div>
	);
}

export default App;
