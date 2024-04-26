// Write your code here.
import './index.css'

const plus_img ="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
const minus_img = "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
const FaqItem = props => {
  const {faqDetails, clickedIcon} = props
  const {questionText, answerText} = faqDetails

  const iconClick = () => {
    console.log(clickedIcon)
    const imgurl = clickedIcon ? plus_img : minus_img
    
  }
  return (
    <li className="faq-listItem">
      <div className="btn-con">
        <h1 className="faq-ques">{questionText}</h1>
        <button className="btn" type="button" onClick={iconClick}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
            alt="plus"
            className="icon"
          />
        </button>
      </div>
      <div>
        <hr className="line" />
        <p className="faq-ans">{answerText}</p>      
      </div>

    </li>
  )
}
export default FaqItem
