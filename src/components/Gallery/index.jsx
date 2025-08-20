import data from '../../datas/data.json'
import Card from '../Card'

function Gallery() {
    return(
        <div className='card-container'>
            <ul className='card-list'>
                {data.map(({id, cover, title}) => (
                    <div key={id}>
						<Card
							cover={cover}
							name={title}							
						/>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Gallery