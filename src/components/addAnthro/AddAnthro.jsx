import React from 'react';
import './AddAnthro.css';
import Label from '../Label';

const AddAnthro = () => (
  <div className="userUpdate">
    <span className="userUpdateTitle">Anthropométrie</span>
    <form className="userUpdateForm">
      <div className="userUpdateLeft">
        <div className="userUpdateItem">
          <Label>Périmetre brachial(centimètre)</Label>
          <input type="text" placeholder="5.4" className="userUpdateInput" />
        </div>
        <div className="userUpdateItem">
          <Label>Périmetre cranien(centimètre)</Label>
          <input type="text" placeholder="32" className="userUpdateInput" />
        </div>
        <div className="userUpdateItem">
          <Label>Poids(kilogramme)</Label>
          <input type="text" placeholder="14.3" className="userUpdateInput" />
        </div>
        <div className="userUpdateItem">
          <Label>Taille(centimètre)</Label>
          <input type="text" placeholder="110.7" className="userUpdateInput" />
        </div>
        <div className="userUpdateItem">
          <Label>Type de malnutrition</Label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">MAS</option>
            <option value="no">MAM</option>
            <option value="no">Forme légère de malnutrition</option>
          </select>
        </div>
        {/* <button className="userAddButton">Ajouter</button> */}
      </div>
    </form>
  </div>
);

export default AddAnthro;
