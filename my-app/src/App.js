import './App.css';
import someData from './news.json';

function App() {
  console.log(someData);
  return (
    <div className = 'news__main'>
      {someData.map((item) => <div className = 'news__main-cards'>
        <span className = 'news__main-title'>{item.title}</span>
        <span className = 'news__main-content'>{item.content}</span>
        <span className = 'news__main-date'>{item.dateCreated}</span>
        {item.link && <a className = 'news__main-link' href={item.link}>link</a>}
        {item.photo && <img className = 'news__main-photo' src={item.photo} />}
        {item.categories && <div className = 'news__main-categorie'>{item.categories.map((categorie) => <div>{categorie.name}</div>)}</div>}
        {item.isSpecial && <div className = 'news__main-isSpecial'>True</div>}
      </div>)}
    </div>
  );
}
export default App;