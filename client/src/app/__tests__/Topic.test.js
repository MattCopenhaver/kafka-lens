import React from 'react';
import { shallow } from 'enzyme';

import Topic from '../components/Topic';

describe('Topic.js unit tests', () => {
  let wrapper;
  const props = {
    id: 1,
    showPartitions: jest.fn(),
    topicInfo: {
      showPartitions: false,
      topic: 'test1',
      partition: 5
    }
  };
  beforeAll(() => {
    wrapper = shallow(<Topic {...props} />);
  });

  it('Should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call showPartitions on click', () => {
    wrapper
      .find('div')
      .at(0)
      .childAt(0)
      .simulate('click');
    expect(props.showPartitions).toHaveBeenCalled();
  });

  it('Should render a div with inner text "test1" ', () => {
    expect(
      wrapper
        .find('div')
        .at(0)
        .text()
    ).toEqual('test1');
  });

  it('Should render PartitionList when showMessages = true', () => {
    wrapper.setProps({
      topicInfo: {
        showPartitions: true,
        topic: 'test1',
        partition: 5
      }
    });
    expect(wrapper.exists('PartitionList')).toEqual(true);
  });
});
