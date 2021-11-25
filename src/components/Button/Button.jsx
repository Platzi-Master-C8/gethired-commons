import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyles = styled.button`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    ${(props) =>
        props.primary
            ? `
      color: white;
      background-color: #1ea7fd;
    `
            : `      
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `};
    ${(props) => (props.backgroundColor ? `background-color: ${props.backgroundColor};` : '')};
    font-size: ${(props) => (props.size === 'small' ? '12px' : props.size === 'large' ? '16px' : '14px')};
    padding: ${(props) => (props.size === 'small' ? '10px 16px' : props.size === 'large' ? '12px 24px' : '11px 20px')};
`;

const Button = ({ primary, backgroundColor, size, label, ...props }) => (
    <ButtonStyles type="button" primary={primary} backgroundColor={backgroundColor} size={size} {...props}>
        {label}
    </ButtonStyles>
);

Button.propTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};

export default Button;
