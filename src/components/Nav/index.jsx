import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PATHS from '@/constant/path';
const Nav = () => {
  const [activeLink, setActiveLink] = useState(PATHS.HOME);

  const _onClick = (path) => {
    setActiveLink(path);
  }

  return (
    <>
      <nav className="navbar">
        <ul className="navbar__main">
          <li className="navbar__link">
            <Link 
              to={PATHS.HOME} 
              className={`navbar__item ${activeLink === PATHS.HOME ? 'active' : ''}`}
              onClick={() => _onClick(PATHS.HOME)}
            >
              Trang chủ
            </Link>
          </li>
          <li className="navbar__link">
            <Link 
              to={PATHS.ABOUT} 
              className={`navbar__item ${activeLink === PATHS.ABOUT ? 'active' : ''}`}
              onClick={() => _onClick(PATHS.ABOUT)}
            >
              Về CFD Circle
            </Link>
          </li>
          <li className="navbar__link">
            <Link 
              to={PATHS.COURSE.INDEX} 
              className={`navbar__item ${activeLink === PATHS.COURSE.INDEX ? 'active' : ''}`}
              onClick={() => _onClick(PATHS.COURSE.INDEX)}
            >
              Khóa học
            </Link>
          </li>
          <li className="navbar__link">
            <Link 
              to={PATHS.BLOG.INDEX} 
              className={`navbar__item ${activeLink === PATHS.BLOG.INDEX ? 'active' : ''}`}
              onClick={() => _onClick(PATHS.BLOG.INDEX)}
            >
              Bài viết
            </Link>
          </li>
          <li className="navbar__link">
            <Link 
              to={PATHS.CONTACT} 
              className={`navbar__item ${activeLink === PATHS.CONTACT ? 'active' : ''}`}
              onClick={() => _onClick(PATHS.CONTACT)}
            >
              Liên hệ
            </Link>
          </li>
        </ul>
        <div className="navbar__overlay" />
      </nav>
    </>
  );
}

export default Nav;
