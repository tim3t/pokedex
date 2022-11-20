import React from 'react';

const Pokecard = (props) => {
	return (
		<div className='Pokecard'>
			<div>{props.name}</div>
			<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
			<div>Type: {props.type}</div>
			<div>Experience: {props.exp}</div>
		</div>
	);
};

export default Pokecard;
