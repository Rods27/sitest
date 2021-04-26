import React from 'react';
import { Header } from '../components';
import { editAlbum, createAlbum } from '../api';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { history: { location: { state: { album } } } } = this.props;
    document.querySelector('.edit').childNodes[0].childNodes[1].value = album.album_name
    document.querySelector('.edit').childNodes[1].childNodes[1].value = album.artist
    document.querySelector('.edit').childNodes[2].childNodes[1].value = album.year
    document.querySelector('.edit').childNodes[3].childNodes[1].value = album.duration
    document.querySelector('.edit').childNodes[4].childNodes[1].value = album.gender
  }

  async editAlbum({ target }) {
    const { history: { location: { state: { album } } } } = this.props;
    const { history } = this.props;
    const album_name = target.parentNode.parentNode.childNodes[0].childNodes[1].value;
    const artist = target.parentNode.parentNode.childNodes[1].childNodes[1].value;
    const year = target.parentNode.parentNode.childNodes[2].childNodes[1].value;
    const duration = target.parentNode.parentNode.childNodes[3].childNodes[1].value;
    const gender = target.parentNode.parentNode.childNodes[4].childNodes[1].value;
    const response = await editAlbum(
      album.id,
      Number(album.user_id),
      album_name, artist,
      Number(year),
      gender,
      Number(duration)
    );
    window.alert(`${response.message}`);
    history.push({
      pathname: '/albuns',
      state: { userid: album.user_id }
    });
  }

  async createAlbum({ target }) {
    const { history: { location: { state: { album } } } } = this.props;
    const { history } = this.props;
    const album_name = target.parentNode.parentNode.childNodes[0].childNodes[1].value;
    const artist = target.parentNode.parentNode.childNodes[1].childNodes[1].value;
    const year = target.parentNode.parentNode.childNodes[2].childNodes[1].value;
    const duration = target.parentNode.parentNode.childNodes[3].childNodes[1].value;
    const gender = target.parentNode.parentNode.childNodes[4].childNodes[1].value;
    const response = await createAlbum(
      Number(album.user_id),
      album_name, artist,
      Number(year),
      gender,
      Number(duration)
    );
    if(response.message === 'Album created sucessfully.') {
      history.push({
        pathname: '/albuns',
        state: { userid: album.user_id }
      });
      window.alert('Album criado com sucesso.')
    } else {
      window.alert(`${response.message}`)
    }
  }

  render() {
    const { history } = this.props;
    const { history: { location: { state: { album } } } } = this.props;
    return (
      <div className="details-container">
        <Header history={ history }/>
        <div className="details-div">
          <div className="details">
            <span>ALBUM</span>
            <h1>{album.album_name}</h1>
            <h3>{album.artist}</h3>
            <div className="minor-info">
              <span>{album.year} - {album.duration}min - {album.gender}</span>
            </div>
          </div>
          <div className="edit">
            <label>
              <span>Album</span>
              <input type="text" />
            </label>
            <label>
              <span>Artista</span>
              <input type="text" />
            </label>
            <label>
              <span>Ano</span>
              <input type="number" min="0" max="2021" />
            </label>
            <label>
              <span>Duração</span>
              <input type="number" min="0" max="100" />
            </label>
            <label>
              <span>Gênero</span>
              <input type="text" />
            </label>
            <div className="button-div">
              <button type="button" id="edit" onClick={ (event) => this.editAlbum(event) }>
                Editar
              </button>
              <button type="button" id="create" onClick={ (event) => this.createAlbum(event) }>
                Criar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
