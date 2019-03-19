import React, {Component} from 'react';
import styled from 'styled-components';
import {Row, Column, Colors, H1, H2, H3, InnerWrapper, PrimaryButton, SecondaryButton, IconButton, P, Input, Select, Option} from '../Theme';

class Styleguide extends Component {
    constructor() {
        super();
        this.state = {
            selectValue : [{
                value: ''
            }]
        }
    }
    


    selectUpdate = e => {
        e.preventDefault();
        // this.setState({
        //     selectValue : {
        //         value :  e.currentTarget.textContent
        //     }
        // })
        
        console.log(e.currentTarget.textContent)
    }

    render() {
        return (
            <InnerWrapper>
                <StylesTitle>Colors</StylesTitle>
                <Row grid columns={"repeat(5,1fr)"}>
                    <BaseBlackColor>
                        <p>Base UI Black</p>
                        <p>{Colors.font_color}</p>
                    </BaseBlackColor>
                    <PrimaryColor>
                        <p>Primary Band Color</p>
                        <p>{Colors.primary_color}</p>
                    </PrimaryColor>
                    <SecondaryColor>
                        <p>Secondary/ Hint Text</p>
                        <p>{Colors.secondary_color}</p>
                    </SecondaryColor>
                    <SuccessColor>
                        <p>Success</p>
                        <p>{Colors.success_color}</p>
                    </SuccessColor>
                    <WarningColor>
                        <p>Warning/ Error/ Sale</p>
                        <p>{Colors.error_color}</p>
                    </WarningColor>
                </Row>
                <StylesTitle>Buttons</StylesTitle>
                <Row grid columns={"repeat(4,1fr)"}>
                    <Column><PrimaryButton>Primary</PrimaryButton></Column>
                    <Column><SecondaryButton>Secondary</SecondaryButton></Column>
                    <Column><IconButton>Icon Button</IconButton></Column>
                </Row>
                <StylesTitle>Typography</StylesTitle>
                <Row grid columns={"repeat(1,1fr)"}>
                    <Column><H1>Title One</H1></Column>
                    <Column><H2>Title Two</H2></Column>
                    <Column><H3>Title Three</H3></Column>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis magna in est dapibus, at facilisis magna consectetur. In lobortis commodo elit, nec egestas arcu ornare ut. Donec porta dignissim ex, eget faucibus tortor facilisis non. Cras vehicula diam eu nulla vulputate interdum. Vivamus vitae ultricies nibh.</P>
                    <Column><a href="#">Primary Text Links</a></Column>
                </Row>
                <StylesTitle>Form Elements</StylesTitle>
                <Row grid columns={"repeat(1,1fr)"}>
                    <Column>
                        <Input type="text"
                        placeholder="Input text" />
                    </Column>
                    <Column>
                        <Input type="email"
                        disabled
                        placeholder="Input disables" />
                    </Column>
                    <Column>
                        <SelectWrapper>
                            <Select></Select>
                            <OptionWrapper onClick={this.selectUpdate}>
                                <Option>Select One</Option>
                                <Option>Select Two</Option>
                                <Option>Select Three</Option>
                            </OptionWrapper>                   
                        </SelectWrapper>

                        {/* <select onChange={this.selectUpdate}>
                            <option>Select One</option>
                            <option>Select Two</option>
                            <option>Select Three</option>
                        </select> */}
                    </Column>
                    {/* <Column>
                        <form>
                           <input type="radio"
                           name="radio"
                           id="radioone" />
                           <label for="radioone">Radio option one</label>
                           <input type="radio"
                           name="radio"
                           id="radiotwo" />  
                           <label for="radiotwo">Radio option two</label>  
                        </form>
                    </Column>
                    <Column>
                        <form>
                           <input type="checkbox"
                           name="radio"
                           id="checkone" />
                           <label for="checkone">Radio option one</label>
                           <input type="checkbox"
                           name="radio"
                           id="checktwo" />   
                           <label for="checktwo">Radio option two</label>  
                        </form>
                    </Column> */}
                </Row>
            </InnerWrapper> 
        );
    }
}

const Color = styled(Column)`
  text-align: center;
`;

const BaseBlackColor = styled(Color)`
  background-color: ${Colors.black};
`;

const PrimaryColor = styled(Color)`
  background-color: ${Colors.primary_color};
`;

const SecondaryColor = styled(Color)`
  background-color: ${Colors.secondary_color};
`;

const SuccessColor = styled(Color)`
  background-color: ${Colors.success_color};
`;

const WarningColor = styled(Color)`
  background-color: ${Colors.error_color};
`;

const StylesTitle = styled(H1)`
    padding-top: 80px;
    text-align: center;
    color: ${Colors.primary_color}
`;

const OptionWrapper = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 999;
    height: 0px;
`;

const SelectWrapper = styled.div`
    position: relative;
`;

export default Styleguide;