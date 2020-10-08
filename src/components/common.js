/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
// import { Link as RouterLink } from 'react-router-dom';
import { PortalWithState as CommonPortal } from "react-portal"
import BodyClassName from "react-body-classname"
import CommonInput from "./input"
import CommonIcon from "./icon"
import CommonButton from "./button"

export const Icon = CommonIcon
// export const Link = RouterLink;
export const Button = CommonButton
export const Portal = CommonPortal

export const Spacer = ({ size }) => <div style={{ height: size }} />

export const Hyperlink = ({ className, href, children, ...rest }) => {
  const cx = classNames(className, "hyperlink")
  return (
    <a className={cx} href={href} {...rest}>
      {children}
    </a>
  )
}

Hyperlink.defaultProps = {
  className: "",
  href: "#"
}

Hyperlink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired
}

export const Buttons = ({ className, ...rest }) => (
  <div className={classNames("buttons", className)} {...rest} />
)

export const Overlay = ({ children, className, onClose, ...rest }) => {
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }
  console.log(rest.page)
  return (
    <BodyClassName className="overlay-active">
      <div
        className={classNames("overlay", className, rest.page && "page")}
        {...rest}
      >
        <div
          className={classNames(
            "overlay-background",
            rest.page && "small content"
          )}
        />
        <div
          className={classNames(
            "overlay-foreground",
            rest.page && "small content"
          )}
        >
          {children}
          <button
            className="overlay-close"
            disabled={!onClose}
            onClick={handleClose}
          >
            <Icon times />
          </button>
        </div>
      </div>
    </BodyClassName>
  )
}

export const Divider = props => (
  <div className="dividers">
    <div className="divider divider-left" />
    {props.content && <div className="divider-content">{props.content}</div>}
    <div className="divider divider-right" />
  </div>
)

export const Spinner = ({ className, ...rest }) => (
  <div className={classNames("spinner", className)} {...rest}>
    <Icon loading />
  </div>
)

export const Box = ({ children, className, ...rest }) => {
  const edges = (
    <div className="edges">
      <div className="edge edge-top" />
      <div className="edge edge-right" />
      <div className="edge edge-bottom" />
      <div className="edge edge-left" />
    </div>
  )
  if (children) {
    return (
      <div className={classNames("box", className)} {...rest}>
        {edges}
        {children}
      </div>
    )
  }
  return edges
}

export const Input = ({ ...props }) => <CommonInput {...props} />

Input.defaultProps = {
  spellCheck: false,
  autoCapitalize: "off",
  autoComplete: "off",
  autoCorrect: "off"
}

// export const Markdown = ({ content }) => (
//   remark().use(reactRenderer, {
//     remarkReactComponents: {
//       a: Hyperlink,
//     },
//   }).processSync(content).contents
// );
