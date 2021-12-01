import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';
import { cx } from '@emotion/css';

const useStyle = makeStyles({
  root: {
    userSelect: 'none',
    width: '1.5em',
    height: '1.5em',
    display: 'inline-block',
    fill: 'currentcolor',
    flexShrink: 0,
  },
});

const SvgIcon = forwardRef(function SvgIcon(props, ref) {
  const classes = useStyle();
  const { children, className, ...other } = props;
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...other}
      className={cx(classes.root, className)}
    >
      {children}
    </svg>
  );
});

SvgIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SvgIcon;
