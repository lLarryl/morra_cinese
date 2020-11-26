import { Label } from './components/Agnostic/Atoms/Label/Label';
import React from 'react';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
      <Label value="testo di test" />,
    );
    let result = component.toJSON();
    expect(result).toMatchSnapshot();
});
