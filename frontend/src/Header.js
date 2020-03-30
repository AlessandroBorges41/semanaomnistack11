//obrigatório que esteja no arquivo a importação do React
import React from 'react';

export default function Header({ children }){
    return(
       <header>
           <h1>{children}</h1>
       </header> 
    );
}