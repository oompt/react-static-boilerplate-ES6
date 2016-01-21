
import React  from 'react'
import Router from 'react-router'
import Header from './Header.jsx'
import css    from '../css/base.css'

let RouteHandler = Router.RouteHandler

export default class Root extends React.Component {
  
  constructor(props) {
      super(props)
      title: props.string
  }

  render () {

    let initialProps = {
      __html: safeStringify(this.props)
    }

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body className='p2'>
          <Header {...this.props} />
          <RouteHandler {...this.props} />
          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src='/bundle.js' />
        </body>
      </html>
    )
  }
}

// Copy all properties except webpackStats (added in by Webpack), which is huge, 
// has circular references and will not be used by the React components anyways.
// Make regex replacements to not break the HTML as well.
function safeStringify (obj) {
  let objNoStats = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && key != "webpackStats") {
      objNoStats[key] = obj[key];
    }
  }
  return JSON.stringify(objNoStats).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}
