import React from 'react';
import { Header } from '../components';
import { getAlbuns, deleteAlbum } from '../api'

class Albuns extends React.Component {
  constructor() {
    super();
    this.state = {
      albuns: {}
    };
  }

  async componentDidMount() {
    const { history: { location: { state } } } = this.props;
    const response = await getAlbuns(state.userid);
    this.setState( { albuns: response } )
  }

  async deleteAlbum(element) {
    const response = await deleteAlbum(element.id);
    if (response.message === "Album deleted sucessfully.") {
      window.alert('Album deletado com sucesso.');
      window.location.reload();
    }
  }

  render() {
    const { history } = this.props;
    const { albuns } = this.state;
    return (
      <div className="albuns-container">
        <Header history={ history } />
        <div className="albuns-div">
          { albuns.length > 0 ? albuns.map((element, index) => (
              <div
                key={ index }
                className="album"
              >
                <span>ALBUM</span>
                <h1>{element.album_name}</h1>
                <h3>{element.artist}</h3>
                <div className="minor-info">
                  <span>{element.year} - {element.duration}min - {element.gender}</span>
                </div>
                <div onClick={ () => history.push({ pathname: `/albuns/${index + 1}`, state: { album: element } }) }>
                  <i className="fas fa-pen edit"></i>
                </div>
                <div onClick={ () => this.deleteAlbum(element) }>
                  <i class="fas fa-trash delete"></i>
                </div>
              </div>
          )) 
            :
            <div className="create-div" onClick={ () => history.push(
              { pathname: '/create',
              state: { userid: history.location.state.userid } })}>
              <i className="fas fa-plus"></i>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Albuns;
