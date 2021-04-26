import React from 'react';
import { Header } from '../components';
import { createAlbum } from '../api';

class Create extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async createAlbum({ target }) {
    const { history: { location: { state: { userid } } } } = this.props;
    const { history } = this.props
    const album_name = target.parentNode.parentNode.childNodes[0].childNodes[1].value;
    const artist = target.parentNode.parentNode.childNodes[1].childNodes[1].value;
    const year = target.parentNode.parentNode.childNodes[2].childNodes[1].value;
    const duration = target.parentNode.parentNode.childNodes[3].childNodes[1].value;
    const gender = target.parentNode.parentNode.childNodes[4].childNodes[1].value;
    const response = await createAlbum(
      Number(userid),
      album_name, artist,
      Number(year),
      gender,
      Number(duration)
    );
    console.log(response.message)
    if(response.message !== 'Album created sucessfully.') {
      window.alert(`${response.message}`)
    } else {
      history.push({
        pathname: '/albuns',
        state: { userid: userid }
      });
      window.alert('Album criado com sucesso.')
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div className="details-container">
        <Header history={ history }/>
        <div className="details-div">
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
              <button type="button" id="create-create" onClick={ (event) => this.createAlbum(event) }>
                Criar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
