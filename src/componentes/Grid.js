import React from 'react';
import blogs from '../blogs.json';
import './Grid.css';

const Grid = (props) => {
        //const [ntareas,setTarea] = useState(10);
        const ntareas = blogs.data.length;
        const blog = blogs.data.map(t =>
        <div className="card col-md-4 row_blog">
          <div className="card-image">
            <img src={t.main_image} />
          </div>
          <div className="card-body">
            <h4 className="title_blog">{t.title}</h4>
            <p className="descripci_blog">{t.text}</p>
          </div>
        </div>
);
    return (
        <div className="row">
            <h4>{ntareas} post publicados</h4>
            {blog}
        </div>
    );
  }
  
  export default Grid;