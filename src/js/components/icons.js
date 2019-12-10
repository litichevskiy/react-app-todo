import React from 'react';
import PropTypes from 'prop-types';

import {
  DEFAULT_ICON_WIDTH,
  DEFAULT_ICON_HEIGHT,
  DEFAULT_ICON_FILL,
  DEFAULT_STROKE_WIDTH } from '../config';

export const IconEdit = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    x="0"
    y="0"
    viewBox="0 0 528.899 528.899">
    <path d="M328.883 89.125l107.59 107.589-272.34 272.34L56.604 361.465l272.279-272.34zm189.23-25.948l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zM.3 512.69c-1.958 8.812 5.998 16.708 14.811 14.565l119.891-29.069L27.473 390.597.3 512.69z"/>
  </svg>
);

IconEdit.defaultProps = {
  width: DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  fill: DEFAULT_ICON_FILL,
};

IconEdit.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

export const IconDelete = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    viewBox="-40 0 427 427.00131">
    <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
    <path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
    <path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/>
    <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
</svg>
);

IconDelete.defaultProps = {
  width: DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  fill: DEFAULT_ICON_FILL,
};

IconDelete.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

export const IconPlus = ({ width, height, fill, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={width}
    height={height}>
      <line
        strokeLinecap='round'
        strokeWidth={strokeWidth}
        stroke={fill} x1="16" x2="16" y1="2" y2="29"></line>
      <line
        strokeLinecap='round'
        strokeWidth={strokeWidth}
        stroke={fill} x1="2" x2="29" y1="16" y2="16"></line>
  </svg>
);

IconPlus.defaultProps = {
  width: DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  fill: DEFAULT_ICON_FILL,
  strokeWidth: DEFAULT_STROKE_WIDTH,
};

IconPlus.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.string,
};

export const IconChecked = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    x="0px"
    y="0px"
    width={width}
    height={height}
    fill={fill}>
    <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/>
  </svg>
);

IconChecked.defaultProps = {
  width: DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  fill: DEFAULT_ICON_FILL,
};

IconChecked.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

export const IconClose = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47.971 47.971"
    x="0px"
    y="0px"
    width={width}
    height={height}
    fill={fill}>
    <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
  </svg>
);

IconClose.defaultProps = {
  width: DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  fill: DEFAULT_ICON_FILL,
};

IconClose.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

export const IconSort = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 384 384">
      <rect height="26" width="96" y="351.333008" x="-0.823792"/>
      <rect height="26" width="195.844359" y="232.233448" x="-0.823792"/>
      <rect height="26" width="288" y="114.787099" x="-0.823792"/>
      <rect height="26" width="384" y="0" x="-0.823791"/>
  </svg>
);

IconSort.defaultProps = {
  width: DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  fill: DEFAULT_ICON_FILL,
};

IconSort.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

export const IconArrowLeft = ({ width, height, fill, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    width={width}>
    <polyline
      stroke={fill}
      strokeWidth={strokeWidth}
      fill="none"
      points="12.5,21 3.5,12 12.5,3 "
      strokeMiterlimit="10" />
    <line
      stroke={fill}
      strokeWidth={strokeWidth} x1="22" x2="3.5" y1="12" y2="12"
      strokeMiterlimit="10"/>
  </svg>
);

IconArrowLeft.defaultProps = {
  width: DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  fill: DEFAULT_ICON_FILL,
  strokeWidth: DEFAULT_STROKE_WIDTH,
};

IconArrowLeft.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.string,
};