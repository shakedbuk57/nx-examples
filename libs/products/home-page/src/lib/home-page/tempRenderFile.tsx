import React from 'react';

export default function EmptyTestComponent() {
  return React.createElement('div', { 'data-testid': 'test-component' }, 'Angular components loaded successfully');
}
