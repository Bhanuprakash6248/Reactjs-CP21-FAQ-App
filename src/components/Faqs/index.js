// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {isclicked: false}



  render() {
    const {faqsList} = this.props
    const {isclicked} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="main-head">FAQS</h1>
          <ul className="faq-con">
            {faqsList.map(each => (
              <FaqItem
                faqDetails={each}
                key={each.id}
                clickedIcon={isclicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
