
import React  from 'react'
import Router from 'react-router'

let Link = Router.Link

export default class Header extends React.Component {

  constructor(props) {
      super(props)
      title: props.string
  }

  render () {

    return (
      <header className='py2'>
        <h1 className='mt0'>{this.props.title}</h1>
        <div className='mxn2'>
          <Link to='/' className='button button-transparent'>Index</Link>
          <Link to='/about' className='button button-transparent'>About</Link>
        </div>
      </header>
    )
  }
}
