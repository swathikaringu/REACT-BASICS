import React, { Component } from 'react'

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import S from './components/S1' 
import Main from './components/Mainsection'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import Greeting from './components/Greeting'
import NameList from './components/NameList'
import Stylesheet from './components/StyleSheet'
import Inline from './components/Inline'
import './appStyles.css'
import sty from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <ParentComp/>
      {/*   <Table/> */}
       {/*  <FragmentDemo/> */}
       {/*  <LifecycleA /> */}
      {/*   <Form/> */}
       {/*  <h1 className ='error'> Error</h1>
        <h1 className= {sty.sucess}>Sucess</h1>
        <Inline/> */}
       {/*  <Stylesheet primary = {true} /> */}
       {/*  <NameList/> */}
       
      {/*   <Greeting/> */}
{/*         <ParentComponent/> */}
        {/* <FunctionClick/>
       
         <ClassClick/> */}
         {/* <EventBind/> */}
      {/*   <Counter/> */}
         {/* < S name="Bruce" heroName="Batman"  />
     < S name="Clark" heroName="superman" />
     <button> Action </button> 
     <S name="Diana" heroName="wonder women"/> 
  */}
       {/* <Welcome name="Bruce" heroName="Batman"  />
    < Welcome name="Clark" heroName="superman" />
      <Welcome name="Diana" heroName="wonder women" />  */}
       
     
{/* < Greet/> */}
{/* < Welcome/> */}
{/* < Hello/> */}
{/* <S/> */}
     {/*  < Main /> */}
    {/*  <Message/> */}
      </div>
    )
  }
}

export default App;
