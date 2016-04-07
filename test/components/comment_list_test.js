import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  
  beforeEach(() => {
    const props = {comments: ['New Comment', 'Another New Comment']};
    component = renderComponent(CommentList, null, props);
  });
  
  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });
  
  it('show each comment this is provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Another New Comment');
  });
});