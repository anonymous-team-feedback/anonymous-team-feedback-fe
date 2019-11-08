import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { H1, H2, H3, Section, AboutContainer } from "./about-style.js";

import { List, Image, Divider } from "semantic-ui-react";

class About extends React.Component {

  render() {
    return (
      <div>
        <H1>"Meet the Team"</H1>
        <AboutContainer>
          <Section>
            <H2>Alyssa Saez</H2>
              <Image
                circular
                onClick={this.toggleVisibility}
                src="https://www.imageupload.net/upload-image/2019/11/01/Alyssa.png"
                as="a"
                size="small"
                href="https://github.com/AlyssaSaez"
                target="_blank"
                bordered
              />
            <H3>Full Stack Developer</H3>

            <List>
              <List.Item>
                <List.Icon name='github' />
                <List.Content>
                  <a href="https://github.com/AlyssaSaez" target="_blank">GitHub</a>
                </List.Content>
                </List.Item>

                <List.Item>
                <List.Icon name='linkedin' />
                <List.Content>
                  <a href="https://www.linkedin.com/in/alyssasaez" target="_blank">LinkedIn</a>
                </List.Content>
              </List.Item>
              </List>

          </Section>

          <Divider section />

          <Section>
            <H2>William Soukkachang</H2>
              <Image
                circular
                onClick={this.toggleVisibility}
                src="https://www.imageupload.net/upload-image/2019/11/02/Will-squared.jpg"
                as="a"
                size="small"
                href="https://github.com/Wsoukkachang"
                target="_blank"
                bordered
              />
            <H3>Full Stack Developer</H3>

            <List>
              <List.Item>
                <List.Icon name='github' />
                <List.Content>
                  <a href="https://github.com/Wsoukkachang" target="_blank">GitHub</a>
                </List.Content>
                </List.Item>

                <List.Item>
                <List.Icon name='linkedin' />
                <List.Content>
                  <a href="https://www.linkedin.com/in/wsoukkachang" target="_blank">LinkedIn</a>
                </List.Content>
              </List.Item>
              </List>
          </Section>

          <Divider section />

          <Section>
            <H2>Triston Armstrong</H2>
              <Image
                circular
                onClick={this.toggleVisibility}
                src="https://www.imageupload.net/upload-image/2019/11/01/Triston.png"
                as="a"
                size="small"
                href="https://github.com/Tarmstrong95"
                target="_blank"
                bordered
              />
            <H3>Full Stack Developer</H3>

            <List>
              <List.Item>
                <List.Icon name='github' />
                <List.Content>
                  <a href="https://github.com/Tarmstrong95" target="_blank">GitHub</a>
                </List.Content>
                </List.Item>

                <List.Item>
                <List.Icon name='linkedin' />
                <List.Content>
                  <a href="https://www.linkedin.com/in/triston95strong" target="_blank">LinkedIn</a>
                </List.Content>
              </List.Item>
              </List>
          </Section>

          <Divider section />

          <Section>
            <H2>Kaiser Wu</H2>
              <Image
                circular
                onClick={this.toggleVisibility}
                src="https://www.imageupload.net/upload-image/2019/11/02/Kaiser-squared.png"
                as="a"
                size="small"
                href="https://github.com/kaiserawu"
                target="_blank"
                bordered
              />
            <H3>Full Stack Developer</H3>

            <List>
              <List.Item>
                <List.Icon name='github' />
                <List.Content>
                  <a href="https://github.com/kaiserawu" target="_blank">GitHub</a>
                </List.Content>
                </List.Item>

                <List.Item>
                <List.Icon name='linkedin' />
                <List.Content>
                  <a href="https://www.linkedin.com/in/kaiserwu" target="_blank">LinkedIn</a>
                </List.Content>
              </List.Item>
              </List>
          </Section>

          <Divider section />

          <Section>
            <H2>Dexter Lewis</H2>
              <Image
                circular
                onClick={this.toggleVisibility}
                src="https://www.imageupload.net/upload-image/2019/11/01/Dexter.png"
                as="a"
                size="small"
                href="https://github.com/dxtrlws"
                target="_blank"
                bordered
              />
            <H3>Full Stack Developer</H3>

            <List>
              <List.Item>
                <List.Icon name='github' />
                <List.Content>
                  <a href="https://github.com/dxtrlws" target="_blank">GitHub</a>
                </List.Content>
                </List.Item>

                <List.Item>
                <List.Icon name='linkedin' />
                <List.Content>
                  <a href="https://www.linkedin.com/in/dexterlewis" target="_blank">LinkedIn</a>
                </List.Content>
              </List.Item>
              </List>
          </Section>
        </AboutContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.usersReducer.isLoggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(About)
);
