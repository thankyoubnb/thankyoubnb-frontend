import React, { useContext, useEffect, useState, useMemo, useRef } from 'react'
import cs from 'classnames'
import { FormattedMessage, injectIntl } from 'react-intl'
import TyBnb from '../../assets/image/tybnb/tybnb1@2x.png'
import CZ from '../../assets/image/tybnb/CZ@2x.png'
import Telegram from '../../assets/image/tybnb/telegram-fill.svg'
import Twitter from '../../assets/image/tybnb/twitter-fill.svg'
import Typewriter from "../../components/typewriter"
import './index.less'

const TYBNB = () => {
  return (
    <div className='tybnb-page'>
      <div className='tybnb-page_content'>
        <img src={TyBnb} className='tybnb-page_title_png' />
        <p className='tybnb-page_title_text'>
          <Typewriter speed={150} showSubscript start={true} text='#TYBNB ' />
          <svg width='100' height='100' viewBox='-50 -50 300 300'>
            <polygon
              className='yellow_triangle'
              strokeLinejoin='round'
              points='100,0 0,200 200,200'
            />
          </svg>
        </p>
        <img src={CZ} className='tybnb-page_title_cz' />
        <div className='tybnb-page_message_board_box'>
          <div className='tybnb-page_message_board'>
            <p className='tybnb-page_message tybnb-page_message_light_blue'>
              2021.11 Launch TYBNB
              <svg width='100' height='100' viewBox='-50 -50 300 300'>
                <polygon
                  className='light_blue_triangle'
                  strokeLinejoin='round'
                  points='100,0 0,200 200,200'
                />
              </svg>
            </p>
            <p className='tybnb-page_message tybnb-page_message_pink'></p>
          </div>
          <div className='tybnb-page_message_board'>
            <p className='tybnb-page_message tybnb-page_message_grey'>...</p>
            <p className='tybnb-page_message tybnb-page_message_dark_blue'>
              2027 Step over Etherum
              <svg width='100' height='100' viewBox='-50 -50 300 300'>
                <polygon
                  className='dark_blue_triangle'
                  strokeLinejoin='round'
                  points='100,0 0,200 200,200'
                />
              </svg>
            </p>
          </div>
          <div className='tybnb-page_message_board'>
            <p className='tybnb-page_message tybnb-page_message_purple'>
              2022 Fuel BNB to $1000
              <svg width='100' height='100' viewBox='-50 -50 300 300'>
                <polygon
                  className='purple_triangle'
                  strokeLinejoin='round'
                  points='100,0 0,200 200,200'
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className='tybnb-page_line'></div>
      <div className='tybnb-page_enter_message'>
        <a className='picture'></a>
        <a className='gif'></a>
        <input placeholder='Start a new message' />
        <a className='send'></a>
      </div>
      <div className='tybnb-page_footer'>
        <div className='tybnb-page_footer_content'>
          <a className='twitter'>
            <img src={Twitter} />
            Twitter
          </a>
          <a className='telegram'>
            <img src={Telegram} />
            Telegram
          </a>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(TYBNB)
