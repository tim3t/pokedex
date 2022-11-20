import Pokecard from './Pokecard';
import defaultProps from './defaultProps';

const Pokedex = (props) => {
	return (
		<div className='Pokedex'>
			<h1 className='Pokedex-Title'>Pokedex</h1>
			<div className='Pokedex-Cards'>
				{defaultProps.map((p) => <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />)}
			</div>
		</div>
	);
};

export default Pokedex;
