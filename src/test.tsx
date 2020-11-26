import { Label } from './components/Agnostic/Atoms/Label/Label';
import React from 'react';
import renderer from 'react-test-renderer';

test('Label has text', () => {
    const component = renderer.create(
      <Label value="testo di test" />,
    );
    let expectedValue = component.root.findByType(Label).props.value;
    expect(expectedValue).toBe("testo di test");
});
