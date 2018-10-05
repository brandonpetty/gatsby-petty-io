import React, { Component } from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import i18n from '../../../i18n.client';

import { withCookies, Cookies } from 'react-cookie';

// styles

const CookieOverlay = styled.div`
  align-items: center;
  background-color: #273a62;
  bottom: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  padding: 2rem;
  position: fixed;
  width: 100%;
  z-index: 111;
  .center-wrapper {
    display: flex;
    margin: 0 auto;
    max-width: 120rem;
    @media only screen and (max-width: 680px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
    margin: 1rem 0;
    padding-right: 5rem;
    @media only screen and (max-width: 680px) {
      font-size: 1.2rem;
      line-height: 1.3;
      padding-right: initial;
      text-align: center;
    }
    a {
      color: white;
      text-decoration: underline;
      &:hover {
        color: #5b87e1;
      }
    }
  }
  .actions-wrapper {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    @media only screen and (max-width: 680px) {
      margin-top: 2rem;
    }
    div {
      cursor: pointer;
      padding: 1rem;
      text-align: center;
      width: 10rem;
    }
    .approve {
      background-color: #5b87e1;
      border: 1px solid #5b87e1;
      color: white;
      margin-right: 2rem;
      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;

class CookiePolicy extends Component {

	constructor(props) {
		super(props)
		this.state = {
      showCookiePopup: true
		}
  }

  acceptsCookie = () => {
    const { cookies } = this.props;
    cookies.set('viewedWarning', true, {path: '/', expires: new Date('2030, 1, 1')});
    this.setState({showCookiePopup: false});
  }
  
  componentDidMount() {
    const { cookies } = this.props;
    const approvalCookie = cookies.get('viewedWarning');
    if (approvalCookie) {
      this.setState({showCookiePopup: false});
    }
    this.forceUpdate();
  }


  render() {
    const { t } = this.props;
    if ( this.state.showCookiePopup === true ) {
      return (
        <CookieOverlay>
          <div className="center-wrapper">
            <p key={Math.random()} dangerouslySetInnerHTML={{__html: t('We use cookies to remember and understand how you may use our site. By using this site, you consent to the use of cookies. To disable cookies, please change your browser cookie settings. Please note that some site functionality may not function correctly if all cookies are disabled. For more information, check out our <a href="https://www.hirezstudios.com/privacy">Privacy Policy</a>.')}} />
            <div className="actions-wrapper">
              <div className='approve' onClick={this.acceptsCookie}>{t('OK')}</div>
            </div>
          </div>
        </CookieOverlay>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default withCookies(translate(['common'], { withRef: true })(CookiePolicy));


