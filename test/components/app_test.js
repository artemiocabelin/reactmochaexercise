import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

// Use describe to group together similar tests
describe('App', () => {
  let component

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('shows a comment box', () => {
    // const component = renderComponent(App);
    expect(component.find('.comment-box')).to.exist
  })

  it('shows a comment list', () => {
    // const component = renderComponent(App);
    expect(component.find('.comment-list')).to.exist
  })

})
