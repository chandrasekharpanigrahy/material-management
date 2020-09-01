import React from "react";

const DeliveryDetails = () => (
  <div>
    <form class="form-inline">
      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
        Material
      </label>
      <select
        class="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
      >
        <option selected>Choose...</option>
        <option value="1">Sand</option>
        <option value="2">Cement</option>
        <option value="3">Chips</option>
      </select>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Rs</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
        <div class="input-group-append">
          <span class="input-group-text">/Kg</span>
        </div>
      </div>

      <button type="submit" class="btn btn-primary my-1">
        Submit
      </button>
    </form>
  </div>
);

export default DeliveryDetails;
