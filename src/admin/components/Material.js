import React from "react";
import './Material.css';

const Material = () =>
    (
        <div className="App">
            <header className="App-header">
                <form>
                    <input type="text" placeholder="Enter material name"/>
                    <button>
                        Add Material
                    </button>
                </form>
            </header>
        </div>
    );
export default Material;