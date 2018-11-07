import { shallow } from 'enzyme'
import React from 'react'
import Header from '../components/Header'

describe('Header', () => {
  it('renders title', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />)
    const title = <h1>NYC List</h1>
    expect(wrapper.contains(title)).toBe(true)
  })
  it('renders a nav', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />)
    expect(wrapper.find('.nav')).toHaveLength(1)
  })
  it('renders the correct links when logged out', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />)
    const links = wrapper.find('.header-link')
    expect(links).toHaveLength(3)
  })
  it('renders the correct links when logged in', () => {
    const wrapper = shallow(<Header isLoggedIn={true} />)
    const links = wrapper.find('.header-link')
    expect(links).toHaveLength(4)
  })
})
