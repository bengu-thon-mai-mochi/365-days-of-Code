function ListItem({ content }) {
  return (
    <div className="card">
        <h1>Day: {content.id}</h1>
        <p> {content.day} -  {content.date}</p>
        {
            content.content.map(el => <li key="content.id"> { el }</li>)
        }
        {content.note.length > 0 
            ? <p><b>Note:</b> {content.note}</p> 
            : <p>Nothing to note today</p>
        }
    </div>
  );
}

export default ListItem;
