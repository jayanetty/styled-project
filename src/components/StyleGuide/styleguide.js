import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Row, Column, Colors, H1, H2, H3, InnerWrapper, PrimaryButton, SecondaryButton, 
    IconButton, P, Input, Select, Option, CardWrapper, Card, Sidebar, SidebarItem, PaginationWrapper, PageNumber, PageControls
} from '../Theme';
import {ListWrapper, Theme} from '../Theme/StyledComponents/theme';
import Tabs from '../Theme/StyledComponents/tabs';

class Styleguide extends Component {
    constructor() {
        super();
        this.state = {
            selectValue : [{
                value: ''
            }]
        }
    }
    


    selectUpdate = (e) => {
        e.preventDefault();
        this.setState({
            selectValue : {
                value :  e.target.value
            }
        })
        
        //console.log(e.currentTarget.textContent)
    }

    showdata = () => {
        // console.log in the selectUpdate function itself will not show as data is passed async
        console.log(this.state.selectValue.value)
    } 

    render() {
        return (
            <InnerWrapper sidebar>
                <Sidebar>
                    <SidebarItem>Colors</SidebarItem>
                    <SidebarItem>Buttons</SidebarItem>
                    <SidebarItem>Typography</SidebarItem>
                    <SidebarItem>Form Elements</SidebarItem>
                    <SidebarItem>Cards</SidebarItem>
                    <SidebarItem>Tabs</SidebarItem>
                    <SidebarItem>Sidebar</SidebarItem>
                </Sidebar>
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
                    <Column><PrimaryButton disabled>Disabled Button</PrimaryButton></Column>
                </Row>
                <StylesTitle>Typography</StylesTitle>
                <Row grid columns={"repeat(1,1fr)"}>
                    <Column>Primary Font : {Theme.primary_font}</Column>
                    <Column>Secondary Font : {Theme.secondary_font}</Column>
                    <Column><H1>Title One: {Theme.secondary_font}</H1></Column>
                    <Column><H2>Title Two: {Theme.secondary_font}</H2></Column>
                    <Column><H3>Title Three: {Theme.secondary_font}</H3></Column>
                    <P>{Theme.primary_font}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis magna in est dapibus, at facilisis magna consectetur. In lobortis commodo elit, nec egestas arcu ornare ut. Donec porta dignissim ex, eget faucibus tortor facilisis non. Cras vehicula diam eu nulla vulputate interdum. Vivamus vitae ultricies nibh.</P>
                    <Column><a href="#">Primary Text Links: {Theme.primary_font}</a></Column>
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
                        {/* <SelectWrapper>
                            <Select></Select>
                            <OptionWrapper onClick={this.selectUpdate}>
                                <Option>Select One</Option>
                                <Option>Select Two</Option>
                                <Option>Select Three</Option>
                            </OptionWrapper>                   
                        </SelectWrapper> */}

                        <Select onChange={this.selectUpdate}>
                            <option>Select One</option>
                            <option>Select Two</option>
                            <option>Select Three</option>
                        </Select>
                        {/* <PrimaryButton onClick={this.showdata}>Show</PrimaryButton> */}
                    </Column>
                    <Column>
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
                    </Column>
                </Row>
                <StylesTitle>Cards</StylesTitle>
                <Row grid columns={"repeat(1,1fr)"}>
                    <Column>
                        <CardWrapper grid gap={"30px"} columns={"repeat(4,1fr)"}>
                            <Card product>
                                <a href="#">
                                    <AddtoWishlist/>
                                    <span><img src="https://via.placeholder.com/237x355" /></span>
                                    <p>Product name</p>
                                    <PriceWrapper>
                                        <OldPrice>$1200</OldPrice>
                                        <Price>$999</Price>
                                    </PriceWrapper>
                                </a>
                            </Card>
                            <Card product>
                                <a href="#">
                                    <AddtoWishlist/>
                                    <span><img src="https://via.placeholder.com/237x355" /></span>
                                    <p>Product name</p>
                                    <PriceWrapper>
                                        <Price>$465</Price>
                                    </PriceWrapper>
                                </a>
                            </Card>
                            <Card product>
                                <a href="#">
                                    <AddtoWishlist/>
                                    <span><img src="https://via.placeholder.com/237x355" /></span>
                                    <p>Product name</p>
                                    <PriceWrapper>
                                        <Price>$465</Price>
                                    </PriceWrapper>
                                </a>
                            </Card>
                            <Card product>
                                <a href="#">
                                    <AddtoWishlist/>
                                    <span><img src="https://via.placeholder.com/237x355" /></span>
                                    <p>Product name</p>
                                    <PriceWrapper>
                                        <Price>$465</Price>
                                    </PriceWrapper>
                                </a>
                            </Card>
                        </CardWrapper>
                    </Column>
                    <Column>
                        <CardWrapper grid columns={"repeat(3,1fr)"}>
                            <Card>Card Element</Card>
                            <Card>Card Element</Card>
                            <Card>Card Element</Card>
                        </CardWrapper>
                    </Column>
                </Row>
                <StylesTitle>Tabs</StylesTitle>
                <Row grid columns={"repeat(1,1fr)"}>
                    <Column>
                        <Tabs>
                            <div label="Tab 1">
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta vulputate eros vitae consectetur. Curabitur sed volutpat nunc. Pellentesque volutpat magna sit amet euismod egestas. Nulla vel lacus erat. In ut orci nulla. Donec arcu est, congue eget lorem vel, elementum dictum dui. Sed arcu magna, sollicitudin eu nibh at, sagittis volutpat enim. Aliquam ullamcorper ullamcorper neque, sit amet dapibus ligula gravida vel. Nulla massa magna, elementum a erat non, malesuada ornare felis. Integer ut odio vulputate, luctus ligula a, bibendum augue. Quisque sit amet eros pharetra, vestibulum nisi sit amet, commodo nisl.</div>
                            </div>
                            <div label="Tab 2">
                                <div>Curabitur vel urna vitae arcu dictum tempus. Nunc eget eros suscipit, fermentum mauris eu, dignissim enim. Nam efficitur, ipsum ac elementum varius, arcu tellus hendrerit odio, sit amet convallis ipsum sapien non nisi. Duis hendrerit pulvinar tortor, eget varius augue eleifend et. Quisque a egestas tellus, ac aliquet magna. Donec pulvinar in lorem in finibus. Curabitur eget ante justo. Sed bibendum nisi vitae urna imperdiet, eget eleifend turpis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu eleifend elit. Fusce porta laoreet nulla in venenatis.</div>
                            </div>
                        </Tabs>
                    </Column>
                </Row>
                <StylesTitle>Pagination</StylesTitle>
                <Row grid columns={"repeat(1,1fr)"}>
                    <Column>
                        <PaginationWrapper>
                            <PageControls previous />
                            <PageNumber>1</PageNumber>
                            <PageNumber>2</PageNumber>
                            <PageNumber>3</PageNumber>
                            <PageNumber>4</PageNumber>
                            <PageNumber>5</PageNumber>
                            <PageControls next />
                        </PaginationWrapper>
                    </Column>
                </Row>
            </InnerWrapper> 
        );
    }
}


const PriceWrapper = styled.div`
    display: flex;
    justify-content: center; 

    p {
        margin: 0;
    }
`;

const Price = styled.p`
    padding-left: 5px;
`;

const OldPrice = styled.p`
    color: ${Colors.error_color};
    text-decoration: line-through;
    padding-right: 5px;
`;

const AddtoWishlist = styled.div`
`;


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