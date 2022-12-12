import illustratorImg from '../images/illustration-thank-you.svg'
import './ThankYouCard.css'

function ThankYouCard(props) {
  return (
    <div className='thank-you-main-container'>
        <img className='illustrator-img' src={illustratorImg} alt='illustrator'/>
        <div className='selected-rating'><h3>{`You selected ${props.star} out of 5`}</h3></div>
        <h2 className='thank-you-heading'>Thank you!</h2>
        <p className='thank-you-description'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}
export default ThankYouCard