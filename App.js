import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import CenaInicial from './src/screens/CenaInicial';
import CenaClientes from './src/screens/CenaClientes';
import CenaDescricao from './src/screens/CenaDescricao';
import CenaTarefas from './src/screens/CenaTarefas';
import CenaFoto from './src/screens/CenaFoto';


const Rootstack = StackNavigator(
  {
  Home: {
    screen: CenaInicial
  },

  Tarefas: {
    screen: CenaTarefas
  },

  Clientes: {
    screen: CenaClientes 
  },

  Descricao: {
    screen: CenaDescricao
  },

  },

  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return (
      <Rootstack />
    );
  }
}
