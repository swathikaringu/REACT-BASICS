import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'swathi'
         }
         console.log('LifecucleA constuctor')
     }
     static getDerivedStateFromProps(props,state){
         console.log('LifecucleA getDerivedStateFromProps')
         return null
     }
     componentDidMount(){
         console.log('LifecucleA componentDidMount')
     }
     shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate')
		return true
     }
     getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
	}
    componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleA componentDidUpdate')
	}

    changeState = () => {
		this.setState({
			name: 'Codevolution'
		})
	}

	render() {
		console.log('LifecycleA render')
		return (
			<div>
				<button onClick={this.changeState}>Change state</button>
				LifecycleA<LifecycleB />
			</div>
		)
    }
}

export default LifecycleA
