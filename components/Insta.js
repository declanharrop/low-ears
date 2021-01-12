import React, { Component } from 'react';
import styled from 'styled-components';

class InstaFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    const Id = this.props.id;
    const Images = this.props.images;
    const URL = `https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables=%7B%22id%22%3A%22${Id}%22%2C%22first%22%3A${Images}%7D`;
    fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        const result =
          responseJson.data.user.edge_owner_to_timeline_media.edges;
        this.setState({ result });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Wrapper>
        <div className="header">
          <div className="lineSection">
            <div className="line" />
          </div>
          <div className="text">
            <h2>{this.props.title}</h2>
          </div>
          <div className="lineSection">
            <div className="line" />
          </div>
        </div>
        <div className="imgwrapper">
          {this.state.result.map((item, i) => (
            <div className="imgPlacer" key={i}>
              <a
                href={`https://www.instagram.com/p/${item.node.shortcode}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.node.thumbnail_src}
                  // alt={item.node.edge_media_to_caption.edges[0].node.text}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="btnplace">
          <a href={this.props.insta} target="_blank" rel="noopener noreferrer">
            <button type="button">{this.props.buttonText}</button>
          </a>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 15vh 0 5vh 0;
  .btnplace {
    margin: 5vh 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
  }
  .text {
    h2 {
      font-size: 2.6rem;
    }
    padding: 0 5px;
  }
  .lineSection {
    flex-grow: 1;
    padding: 0 5px;
  }
  .line {
    background: var(--prime);
    height: 1px;
    width: 100%;
  }
  .imgwrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  h2 {
  }
  .imgPlacer {
    margin: 20px;
  }

  img {
    width: 20vw;
    box-shadow: 0px 0px 6px 0px lightgray;
    border-radius: 4px;
  }

  @media (max-width: 1200px) {
    img {
      width: 40vw;
    }
  }
  @media (max-width: 600px) {
    img {
      width: 80vw;
    }
  }
`;

export default InstaFeed;
