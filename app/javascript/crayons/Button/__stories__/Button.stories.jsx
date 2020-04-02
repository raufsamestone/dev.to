import { h } from 'preact';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import {
  Button,
  DangerButton,
  OutlinedButton,
  SecondaryButton,
} from '@crayons';

import '../../storybook-utiltiies/designSystem.scss';

const commonProps = {
  onClick: action('onclick fired'),
  onMouseOver: action('onmouseover fired'),
  onMouseOut: action('onmouseout fired'),
  onFocus: action('onfocus fired'),
  onBlur: action('onblur fired'),
};

export default {
  title: 'Components/Buttons',
  decorator: [withKnobs],
};

export const Default = () => (
  <Button
    icon={object('icon')}
    variant={text('variant')}
    className={text('className')}
    as={text('as', 'button')}
    url={text('url')}
    buttonType={text('buttonType')}
    disabled={boolean('disabled', false)}
    {...commonProps}
  >
    Hello world!
  </Button>
);

Default.story = {
  name: 'default',
};

export const Secondary = () => (
  <SecondaryButton
    icon={object('icon')}
    className={text('className')}
    as={text('as', 'button')}
    url={text('url')}
    buttonType={text('buttonType')}
    disabled={boolean('disabled', false)}
    {...commonProps}
  >
    Hello world!
  </SecondaryButton>
);

Secondary.story = {
  name: 'secondary',
};

export const Outlined = () => (
  <OutlinedButton
    icon={object('icon')}
    className={text('className')}
    as={text('as', 'button')}
    url={text('url')}
    buttonType={text('buttonType')}
    disabled={boolean('disabled', false)}
    {...commonProps}
  >
    Hello world!
  </OutlinedButton>
);

Outlined.story = {
  name: 'outlined',
};

export const Danger = () => (
  <DangerButton
    icon={object('icon')}
    className={text('className')}
    as={text('as', 'button')}
    url={text('url')}
    buttonType={text('buttonType')}
    disabled={boolean('disabled', false)}
    {...commonProps}
  >
    Hello world!
  </DangerButton>
);

Danger.story = {
  name: 'danger',
};

export const IconWithText = () => {
  const Icon = () => (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="crayons-icon"
    >
      <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
    </svg>
  );

  return (
    <Button
      icon={object('icon', Icon)}
      variant={text('variant')}
      className={text('className')}
      as={text('as', 'button')}
      url={text('url')}
      buttonType={text('buttonType')}
      disabled={boolean('disabled', false)}
      {...commonProps}
    >
      Hello world!
    </Button>
  );
};

IconWithText.story = {
  name: 'icon with text',
};

export const IconOnly = () => {
  const Icon = () => (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="crayons-icon"
    >
      <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
    </svg>
  );

  return (
    <Button
      icon={object('icon', Icon)}
      variant={text('variant')}
      className={text('className')}
      as={text('as', 'button')}
      url={text('url')}
      buttonType={text('buttonType')}
      disabled={boolean('disabled', false)}
      {...commonProps}
    />
  );
};

IconOnly.story = {
  name: 'icon only',
};

export const ButtonAsLink = () => (
  <Button
    variant={text('variant')}
    className={text('className')}
    as={text('as', 'a')}
    icon={object('icon')}
    url={text('url', '#')}
    buttonType={text('buttonType')}
    disabled={boolean('disabled', false)}
    {...commonProps}
  >
    Hello world!
  </Button>
);

ButtonAsLink.story = {
  name: 'button as link',
};
