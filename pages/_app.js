import App from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import TagManager from 'react-gtm-module';
// import CookieConsent from 'react-cookie-consent';
import Nav from '../components/nav';
// import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
:root {
  --prime: #1D1937;
  --second: #332211;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Mulish', sans-serif;
  text-align: center;
  color: var(--navy);
  letter-spacing: 0.05rem;
  font-size: 1.5rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  box-sizing: border-box;
  font-size: 10px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--yellow);
  margin: 0;
  padding: 0;
}
   
a:hover {
  color: var(--blue);
}

button {
  font-family: 'Mulish', sans-serif;
  cursor: pointer;
  font-weight: 500;
}

button:focus {outline:0;}

p {
  font-size: 1.6rem;
  color: var(--black);
  font-weight: 400;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 6rem;
  font-weight: 600;
  color: var(--green);
  letter-spacing: 0.3rem;
  line-height: 1.4;
  margin: 5vh 0;
  text-transform: uppercase;
  text-shadow: 0 0 3px  var(--navy);
}

@media only screen and (max-width: 700px) {
  h1 {
    font-size: 4rem;
  }
}

h2 {
  font-size: 3rem;
  font-weight: 600;
  color: var(--green);
  letter-spacing: .5rem;
  margin: 3vh 0;
  text-shadow: 0 0 2px  var(--navy);
}

h3 {
  font-size: 2.2rem;
  font-weight: 500;
  color: var(--green);
  line-height: 1.6;
  text-shadow: 0 0 1px  var(--navy);
}
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

// const tagManagerArgs = {
//   gtmId: 'GTM-K67S6QD',
// };

class MyApp extends App {
  // componentDidMount() {
  //   TagManager.initialize(tagManagerArgs);
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Nav />
          <Component {...pageProps} />
          {/* <CookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName="Lunula Nails and Beauty Cookie Consent"
            style={{ background: '#1D1937' }}
            buttonStyle={{
              background: '#1D4E89',
              color: '#E5E4D0',
              fontSize: '14px',
            }}
            expires={150}
          >
            By using this website you agree to the use of cookies to enhance the
            user experience.
          </CookieConsent> */}
          {/* <Footer /> */}
        </ThemeProvider>
      </>
    );
  }
}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
