import React from 'react'
import Person from './Person'
function NameList() {
    // const names = ['swathi','kumar','vagdevi','hari']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return <div>{ nameList } </div>
      const persons = [
        {
            id: 1,
            name: 'swathi',
            age: 2,
            skill: 'React'
        },
        {
            id: 2,
            name: 'vagdevii',
            age: 24,
            skill: 'Angular' 
        }, 
        {
            id: 3,
            name: 'hari',
            age: 26,
            skill: 'vue'
        },
        {
            id: 4,
            name: 'kumar',
            age: 28,
            skill: 'javascript'
        }

      ]      
     const personList = persons.map(person => <Person person = {person} />)
     return <div> {personList} </div> 
    }    
       


export default NameList
