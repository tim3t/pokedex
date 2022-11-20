import React from 'react';

const Pokecard = (props) => {
	return (
		<React.Fragment>
			<h1>{props.name}</h1>
			<p>{props.image}</p>
			<p>{props.type}</p>
		</React.Fragment>
	);
};

export default Pokecard;
