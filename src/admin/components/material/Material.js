import React, {useState} from "react";
import './Material.css';

function Material() {
    const [materialName, setMaterialName] = useState('');
    const [unit, setUnit] = useState('');

    function addMaterial(e) {
        e.preventDefault();
        alert(materialName + ' ' + unit)
        setMaterialName('');
        setUnit('');
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={addMaterial}>
                    <input id = "materialName" type="text" placeholder="Enter material name"
                           value={materialName} onChange={event => setMaterialName(event.target.value)}/>
                    <select id = "unit" value={unit} onChange={event => setUnit(event.target.value)}>
                        <option value="KG">KG</option>
                        <option value="Litre" selected>Litre</option>
                    </select>
                    <button>
                        Add Material
                    </button>
                </form>
                <p>Material {materialName} added</p>
            </header>
        </div>
    );
}

export default Material;