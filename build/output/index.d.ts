import React from 'react';

type ButtonProps = {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
};
declare function Button(props: ButtonProps): React.JSX.Element;

export { Button, ButtonProps };
