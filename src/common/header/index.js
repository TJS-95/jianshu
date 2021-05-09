import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrap,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
} from './style'

class Header extends Component {
  getListArea = () => {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPages,
      handleMouseEnter,
      handleMouseLeave,
      handlePageChange,
    } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handlePageChange(page, totalPages, this.spinIcon)}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>{pageList}</div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const {
      focused,
      list,
      login,
      logout,
      handleInputFocus,
      handleInputBlur,
    } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem className="right" onClick={logout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrap>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>
              &#xe614;
            </i>
            {this.getListArea()}
          </SearchWrap>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPages: state.getIn(['header', 'totalPages']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseChange(true))
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseChange(false))
    },
    handlePageChange(page, totalPages, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/g, '')
      originAngle = originAngle ? parseInt(originAngle, 10) : 0
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      const current = page < totalPages ? page + 1 : 1
      dispatch(actionCreators.changePage(current))
    },
    logout() {
      dispatch(loginActionCreators.logout())
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)
