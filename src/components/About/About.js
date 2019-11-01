import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { H1, H2, H3, Section, AboutContainer } from "./about-style.js";

import { Image, Transition, Divider } from "semantic-ui-react";

class About extends React.Component {
  state = { visible: true };

  toggleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  render() {
    const { visible } = this.state;

    return (
        <div>
        <H1>"Meet the Team"</H1>
            <AboutContainer>

                <Section>
                <H2>Alyssa Saez</H2>
                {/* Animation for image */}
                <Transition visible={visible} animation="tada" duration={250}>
                    <Image
                    onClick={this.toggleVisibility}
                    src="https://www.imageupload.net/upload-image/2019/11/01/Alyssa.png"
                    as="a"
                    size="small"
                    href="https://github.com/xCthaeh"
                    target="_blank"
                    bordered
                    />
                </Transition>
                <H3>Full Stack Developer</H3>
                </Section>

                <Divider section />

                <Section>
                <H2>William Soukkachang</H2>
                {/* Animation for image */}
                <Transition visible={visible} animation="tada" duration={250}>
                    <Image
                    onClick={this.toggleVisibility}
                    src="https://www.imageupload.net/upload-image/2019/11/01/Will.jpg"
                    as="a"
                    size="small"
                    href="https://github.com/Wsoukkachang"
                    target="_blank"
                    bordered
                    />
                </Transition>
                <H3>Full Stack Developer</H3>
                </Section>

                <Divider section />

                <Section>
                <H2>Triston Armstrong</H2>
                {/* Animation for image */}
                <Transition visible={visible} animation="tada" duration={250}>
                    <Image
                    onClick={this.toggleVisibility}
                    src="https://www.imageupload.net/upload-image/2019/11/01/Triston.png"
                    as="a"
                    size="small"
                    href="https://github.com/Tarmstrong95"
                    target="_blank"
                    bordered
                    />
                </Transition>
                <H3>Full Stack Developer</H3>
                </Section>

                <Divider section />

                <Section>
                <H2>Kaiser Wu</H2>
                {/* Animation for image */}
                <Transition visible={visible} animation="tada" duration={250}>
                    <Image
                    onClick={this.toggleVisibility}
                    src="https://www.imageupload.net/upload-image/2019/11/01/Kaiser.png"
                    as="a"
                    size="small"
                    href="https://github.com/kaiserawu"
                    target="_blank"
                    bordered
                    />
                </Transition>
                <H3>Full Stack Developer</H3>
                </Section>

                <Divider section />

                <Section>
                <H2>Dexter Lewis</H2>
                {/* Animation for image */}
                <Transition visible={visible} animation="tada" duration={250}>
                    <Image
                    onClick={this.toggleVisibility}
                    src="https://www.imageupload.net/upload-image/2019/11/01/Dexter.png"
                    as="a"
                    size="small"
                    href="https://github.com/dxtrlws"
                    target="_blank"
                    bordered
                    />
                </Transition>
                <H3>Full Stack Developer</H3>
                </Section>
            </AboutContainer>
            </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(About)
);
