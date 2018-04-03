import React from 'react';
import CssStyles from './MainHeader.css';

const MainHeader = props => <h1 className={CssStyles.mainHeader}>{props.title}</h1>

export default MainHeader;
