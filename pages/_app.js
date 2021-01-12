import App from 'next/app';
import NextHead from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import CookieConsent from 'react-cookie-consent';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Nav from '../components/Navigation/nav';
// import TagManager from 'react-gtm-module';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
:root {
  --prime: #7b9d63;
  --second: #6b714b;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  text-align: center;
  color: var(--second);
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
  color: var(--second);
  cursor: pointer;
  margin: 0;
  padding: 0;
}
   
a:hover {
  color: var(--prime);
}

button {
  cursor: pointer;
  font-family: 'Nanum Gothic', sans-serif;
  background: none;
  border: 2px solid var(--second);
  border-radius: 40px;
  margin: 40px;
  padding: 14px 18px;
  letter-spacing: .2rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.6rem;
  color: var(--second);
  &:hover {
    color: white;
    background: var(--second);
  }
}

button:focus {outline:0;}

p {
  font-size: 1.6rem;
  color: var(--second);
  font-weight: 400;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  /* font-family: 'Fjalla One', sans-serif; */
  font-size: 4rem;
  font-weight: 800;
  color: var(--second);
  letter-spacing: 1rem;
  line-height: 1.4;
  margin: 5vh 0;
  text-transform: uppercase;
  text-shadow: 0 0 3px  var(--navy);
}

@media only screen and (max-width: 700px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 1.8rem;
  }
}

h2 {
  /* font-family: 'Fjalla One', sans-serif; */
  font-size: 3rem;
  font-weight: 800;
  color: var(--second);
  letter-spacing: .7rem;
  margin: 3vh 0;
  text-transform: uppercase;
  text-shadow: 0 0 2px  var(--navy);
}

h3 {
  /* font-family: 'Fjalla One', sans-serif; */
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--second);
  text-transform: uppercase;
  line-height: 1.6;
  text-shadow: 0 0 1px  var(--navy);
  letter-spacing: .6rem;
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
    const client = new ApolloClient({
      uri:
        'https://api-eu-central-1.graphcms.com/v2/ckjsv8pk1443l01xq6fg19l8v/master',
    });
    return (
      <>
        <ApolloProvider client={client}>
          <NextHead>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Nanum+Gothic:wght@400;700;800&display=swap"
              rel="stylesheet"
            />
          </NextHead>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Nav />
            <Component {...pageProps} />
            <CookieConsent
              location="bottom"
              buttonText="Accept"
              cookieName="Low Ears Cookie Consent"
              style={{ background: '#1D1937' }}
              buttonStyle={{
                background: '#1D4E89',
                color: '#E5E4D0',
                fontSize: '14px',
              }}
              expires={150}
            >
              By using this website you agree to the use of cookies to enhance
              the user experience.
            </CookieConsent>
            <Footer />
          </ThemeProvider>
        </ApolloProvider>
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
