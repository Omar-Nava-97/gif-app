import React, {useState} from 'react'
import PropTypes from 'prop-types'

//Props de Setcategorys (Comunicacion entre componentes)
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2){

            //console.log('Submit hecho');
            setCategories( cats => [ inputValue, ...cats] );
            setInputValue('');
        }

    }

    return (
        <div class="input-group flex-nowrap justify-content-center">
        <span class="input-group-text" id="addon-wrapping"><img src="https://img.icons8.com/fluency/48/000000/super-mario.png"/></span>
        <form  onSubmit={ handleSubmit }>
            <input 
               class="form-control "
                placeholder="Buscar Gifs"
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        </div>
    )
}

//Uso de proptypes
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}