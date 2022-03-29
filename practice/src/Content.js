import Monsters from './Data.json';

const monsters = Monsters.map(
    (Monster) => {
        return (
            <div key={Monsters.monster}> 
                <h4>{Monster.monster}</h4>
                <p>Risk: {Monster.risk}</p>
                <p>Location: {Monster.location}</p>
                <p><img src={Monster.image} alt="" /></p>
                <hr />
            </div>
        );
    }
);

function Content() {
    return (
        <div>
            <h1>Content</h1>
            {monsters}
        </div>
    );
}

export default Content;