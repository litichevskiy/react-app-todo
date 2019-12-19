import React from 'react';
import PropTypes from 'prop-types';

import {
  DEFAULT_ICON_WIDTH,
  DEFAULT_ICON_HEIGHT,
  DEFAULT_ICON_FILL,
  DEFAULT_STROKE_WIDTH } from '../config';

export const IconDelete = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width={width}
    height={height}
    viewBox="-40 0 427 427">
    <path d="M232 155c-5 0-10 4-10 10v189a10 10 0 0020 0V165c0-6-4-10-10-10zm0 0M114 155c-5 0-10 4-10 10v189a10 10 0 0020 0V165c0-6-4-10-10-10zm0 0"/>
    <path d="M28 127v247c0 14 6 28 15 38 9 9 22 15 36 15h189c14 0 26-6 36-15 9-10 14-24 14-38V127a38 38 0 00-9-75h-52V40a39 39 0 00-39-40h-89a39 39 0 00-40 40v12H38a38 38 0 00-10 75zm240 280H79c-17 0-31-15-31-33V128h250v246c0 18-13 33-30 33zM109 40a19 19 0 0120-20h89a19 19 0 0119 20v12H109zM38 72h271a18 18 0 110 36H38a18 18 0 110-36zm0 0"/>
    <path d="M173 155c-5 0-10 4-10 10v189a10 10 0 0020 0V165c0-6-4-10-10-10zm0 0"/>
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
        stroke={fill} x1="16" x2="16" y1="1" y2="30"></line>
      <line
        strokeLinecap='round'
        strokeWidth={strokeWidth}
        stroke={fill} x1="1" x2="30" y1="16" y2="16"></line>
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
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 26 26">
    <path d="M0 14v-1c0-1 0 0 0 0l2-2h1l6 6L23 3h1l2 2v1L10 23H9 8l-8-9z"/>
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
    fill={fill}
    height={height}
    width={width}
    viewBox="0 0 48 48">
    <path d="M28 24L47 5a3 3 0 10-4-4L24 20 5 1a3 3 0 10-4 4l19 19L1 43a3 3 0 104 4l19-19 19 19a3 3 0 004 0v-4L28 24z"/>
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

export const IconSave = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 385 385">
    <path d="M373 265c-7 0-12 5-12 12v84H24v-84a12 12 0 00-24 0v96c0 7 5 12 12 12h361c7 0 12-5 12-12v-96c0-7-5-12-12-12z"/>
    <path d="M184 285c4 5 12 5 17 0l84-83c5-5 5-12 0-17s-12-5-17 0l-64 63V12c0-7-5-12-12-12s-12 5-12 12v236l-63-63c-5-5-13-5-17 0-5 5-5 13 0 17l84 83z"/>
  </svg>
);

IconSave.defaultProps = {
  width: DEFAULT_ICON_WIDTH,
  height: DEFAULT_ICON_HEIGHT,
  fill: DEFAULT_ICON_FILL,
};

IconSave.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};