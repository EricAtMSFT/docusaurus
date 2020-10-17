/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState} from 'react';
import styles from './styles.module.css';

function ScrollToTop(): JSX.Element {
  const [showScroll, setShowScroll] = useState(false);

  // only display after 400 pixels of YOffset scrolling
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <span
      style={{display: showScroll ? 'flex' : 'none'}}
      role="button"
      tabIndex={0}
      className={styles.scrollToTopLink}
      onClick={scrollTop}>
      <img className={styles.scrollToTopLogo} alt="scroll to top" /> Scroll To
      Top
    </span>
  );
}

export default ScrollToTop;
