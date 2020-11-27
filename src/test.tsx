import { Label } from './components/Agnostic/Atoms/Label/Label';
import React from 'react';
import { shallow } from 'enzyme';

describe('Label', () => {
  test('should have text', () => {
    const component = shallow(<Label value="testo di test" />);
    expect(component.text()).toBe('testo di test');
  });
});
