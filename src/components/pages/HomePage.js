import React from 'react';
import currency_card_img from '../../images/currencies_card_img.jpg';
import crypto_currency_card_img from '../../images/cryptocurrencies_card_img.jpg';
import stock_card_img from '../../images/stock_card_img.jpg';
import news_card_img from '../../images/news_card_img.jpg';
import weather_card_img from '../../images/weather_card_img.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<main className="home-main">
			<HomeMainIntro />
			<FeaturesBox />
		</main>
	);
};

const HomeMainIntro = () => {
	return (
		<section className="home-main__intro d-flex align-items-center justify-content-center">
			<div className="container d-flex flex-column align-items-center">
				<h1 className="font-weight-light text-white text-center text-uppercase">
					Welcome <span className="text-info"> to </span> Businesstry
				</h1>
				<h5 className="font-weight-light text-white text-center mt-2">
					Business app to help you always stay up to date
				</h5>
				<button className="btn btn-outline-info btn-lg mt-3"> Learn More </button>
			</div>
		</section>
	);
};

const FeaturesBox = () => {
	return (
		<section id="home-main__features" className="home-main__features py-5">
			<div className="container">
			<h2 className="display-4 text-center mb-5">Features</h2>
				<div className="row card-deck align-items-center">
					<div className="col-md-6 col-lg-4 offset-md-0 my-3">
						<CurrencyConverterBox />
					</div>
					<div className="col-md-6 col-lg-4 offset-md-0 my-3">
						<CryptoBox />
					</div>
					<div className="col-md-6 col-lg-4 offset-md-0 my-3">
						<StockBox />
					</div>
					<div className="col-md-6 col-lg-6 offset-md-0 my-3 ">
						<NewsBox />
					</div>
					<div className="col-md-6 col-lg-6 offset-md-3 offset-lg-0 my-3">
						<WeatherBox />
					</div>
				</div>
			</div>
		</section>
	);
};

const CurrencyConverterBox = () => {
	return (
		<div className="home-main__feature card mx-3">
			<img src={currency_card_img} alt="" className="card-img-top" />
			<div className="card-body">
				<h4 className="card-title text-center"> Currency Converter </h4>
				<p className="lead">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem commodi, rem quisquam earum
					impedit sequi?
				</p>
			</div>
			<div className="card-footer">
				<Link to="/currency" className="btn btn-primary btn-block">
					Try Now
				</Link>
			</div>
		</div>
	);
};

const CryptoBox = () => {
	return (
		<div className="home-main__feature card mx-3">
			<img src={crypto_currency_card_img} alt="" className="card-img-top" />
			<div className="card-body">
				<h4 className="card-title text-center"> Cryptocurrency Update </h4>
				<p className="lead">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus suscipit in veniam animi
					repellendus dolores quibusdam non reiciendis harum.
				</p>
			</div>
			<div className="card-footer">
				<Link to="/crypto" className="btn btn-primary btn-block">
					Try Now
				</Link>
			</div>
		</div>
	);
};

const StockBox = () => {
	return (
		<div className="home-main__feature card mx-3">
			<img src={stock_card_img} alt="" className="card-img-top" />
			<div className="card-body">
				<h4 className="card-title text-center"> Stock Market Update </h4>
				<p className="lead">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus distinctio fugit harum nisi dignissimos officiis at consequatur.
				</p>
			</div>
			<div className="card-footer">
				<Link to="/stock" className="btn btn-primary btn-block">
					Try Now
				</Link>
			</div>
		</div>
	);
};

const NewsBox = () => {
	return (
		<div className="home-main__feature card mx-3">
			<img src={news_card_img} alt="" className="card-img-top" />
			<div className="card-body">
				<h4 className="card-title text-center"> News Feed </h4>
				<p className="lead">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ducimus unde tempore possimus dolorum.
				</p>
			</div>
			<div className="card-footer">
				<Link to="/news" className="btn btn-primary btn-block">
					Try Now
				</Link>
			</div>
		</div>
	);
};

const WeatherBox = () => {
	return (
		<div className="home-main__feature card mx-3">
			<img src={weather_card_img} alt="" className="card-img-top" />
			<div className="card-body">
				<h4 className="card-title text-center"> Weather Forecast </h4>
				<p className="lead">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ea dolorum natus.
				</p>
			</div>
			<div className="card-footer">
				<Link to="/weather" className="btn btn-primary btn-block">
					Try Now
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
