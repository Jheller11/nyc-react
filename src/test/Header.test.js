import { shallow } from 'enzyme'
import React from 'react'
import Header from '../components/Header'

describe('Header', () => {
  it('renders title and nav', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.contains('h1').to.be(true))
  })
})
