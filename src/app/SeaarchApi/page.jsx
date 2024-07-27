import Componentssearchapi from '@/Components/Componentsearchapi';
import React from 'react';
import styles from './styles.module.css'

const SearchApi = () => {

    return (
        <div>
            <h1>Search by Id</h1>
            <p className={styles.text_large}>Input your desired id</p>
            <Componentssearchapi></Componentssearchapi>
        </div>
    );
};

export default SearchApi;