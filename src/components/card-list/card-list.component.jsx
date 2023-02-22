import CardContainer from './card-container.component'
import './card-list-styles.css'

const CardList = ({ monsters }) => (
    <div className='card-list' key='my-list'>
        {monsters.map(monster => {
            return (
                <CardContainer monster={monster} key={monster.id}/>
            );
        })}
    </div>
)

export default CardList;