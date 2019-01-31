import React from 'react';
import currency_card_img from '../../images/currencies_card_img.jpg';
import crypto_currency_card_img from '../../images/cryptocurrencies_card_img.jpg';
import stock_card_img from '../../images/stock_card_img.jpg';
import news_card_img from '../../images/news_card_img.jpg';
import weather_card_img from '../../images/weather_card_img.jpg';
import { Link } from 'react-router-dom';

const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus distinctio fugit harum nisi dignissimos officiis at consequatur.";

function HomePage() {
	return (
		<main className="home-main">
			<HomeMainIntro />
			<FeaturesBox />
		</main>
	);
};

function HomeMainIntro() {
	return (
		<section className="home-main__intro d-flex align-items-center justify-content-center">
			<div className="container d-flex flex-column align-items-center">
				<h1 className="font-weight-light text-white text-center text-uppercase">
					Welcome <span className="text-info"> to </span> Businesstry
				</h1>
				<h5 className="font-weight-light text-white text-center mt-2">
					Business app which helps you stay always up to date
				</h5>
				<button className="btn btn-outline-info btn-lg mt-3"> Learn More </button>
			</div>
		</section>
	);
};

function FeaturesBox() {
	return (
		<section id="home-main__features" className="home-main__features py-5">
			<div className="container">
			<h2 className="display-4 text-center mb-5">Features</h2>
				<div className="row card-deck align-items-center">
					<div className="col-md-6 col-lg-4 offset-md-0 my-3">
						<FeatureBox img_src={currency_card_img}
									card_title="Currency Converter"
									card_description={description}
									link="/currency" />
					</div>
					<div className="col-md-6 col-lg-4 offset-md-0 my-3">
						<FeatureBox img_src={crypto_currency_card_img}
									card_title="Cryptocurrency Update"
									card_description={description}
									link="/crypto" />
					</div>
					<div className="col-md-6 col-lg-4 offset-md-0 my-3">
						<FeatureBox img_src={stock_card_img}
									card_title="Stock Market Update"
									card_description={description}
									link="/stock" />
					</div>
					<div className="col-md-6 col-lg-6 offset-md-0 my-3 ">
						<FeatureBox img_src={news_card_img}
									card_title="News Feed"
									card_description={description}
									link="/news" />
					</div>
					<div className="col-md-6 col-lg-6 offset-md-3 offset-lg-0 my-3">
						<FeatureBox img_src={weather_card_img}
									card_title="Weather Forecast"
									card_description={description}
									link="/weather" />
					</div>
				</div>
			</div>
		</section>
	);
};

function FeatureBox(props) {
	return (
		<div className="home-main__feature card mx-3">
		<img src={props.img_src} alt="" className="card-img-top" />
		<div className="card-body">
			<h4 className="card-title text-center"> {props.card_title} </h4>
			<p className="lead">
				{props.card_description}
			</p>
		</div>
		<div className="card-footer">
			<Link to="{props.link}" className="btn btn-primary btn-block">
				Try Now
			</Link>
		</div>
	</div>
	)
}

export default HomePage;
