

import "./styles.css"

import ChevronRight from "../../assets/images/svg/Chevron Right.svg"
import EmptyState from "../../assets/images/svg/Empty-State.svg"

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout content">
        <div className="layout-description">
        <div className="layout-text">
          <h4>Tagline</h4>
          <h1>Medium length section heading goes here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className="layout-button">
          <button className="button-box">Button</button>
          <button className="button-link">
            <p>Button</p>
            <img src={ChevronRight} alt="" />
          </button>
        </div>
        </div>
        <img src={EmptyState} alt="" />
      </div>
    </div>
    )
}