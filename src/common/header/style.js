import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  background: #fff;
  position: sticky;
  top: 0;
`

export const Logo = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  white-space: nowrap;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrap = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  color: #777;
  background: #eee;
  font-size: 14px;
  /* transition: all 0.2s ease-out; */
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-:active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-:active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  /* height: 200px; */
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  display: flex;
  cursor: pointer;
  .spin {
    display: block;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.5s ease-in;
    /* transform: rotate(0deg); */
    transform-origin: center center;
  }
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  margin: 0 10px 10px 0;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`

export const Addition = styled.div`
  display: flex;
`
export const Button = styled.div`
  line-height: 36px;
  border-radius: 19px;
  border: 1px solid #ec6f5a;
  font-size: 15px;
  padding: 0 20px;
  margin-right: 20px;
  white-space: nowrap;
  &.reg {
    color: #ec6f5a;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
