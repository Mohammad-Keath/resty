import React from 'react';

import './form.scss';

function Form(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <select className="methods">
            <option id="get" value='GET'>GET</option>
            <option id="post" value='POST'>POST</option>
            <option id="put" value='PUT'>PUT</option>
            <option id="delete" value='DELETE'>DELETE</option>
          </select>
          <label >
            {/* <span>URL: </span> */}
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
        </form>
      </>
    );
}

export default Form;
