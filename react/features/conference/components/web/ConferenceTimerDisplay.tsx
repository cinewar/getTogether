import React from 'react';
import { makeStyles } from 'tss-react/mui';

import { IDisplayProps } from '../ConferenceTimer';

const useStyles = makeStyles()(theme => {
    return {
        timer: {
            ...theme.typography.labelRegular,
            color: '#000000', // changed regarding new design @cinewar
            padding: '6px 8px',
            backgroundColor: '#37BEB1', // changed regarding new design @cinewar
            opacity: 0.65,
            boxSizing: 'border-box',
            height: '28px',
            borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
            marginRight: '2px',

            '@media (max-width: 300px)': {
                display: 'none'
            }
        }
    };
});

/**
 * Returns web element to be rendered.
 *
 * @returns {ReactElement}
 */
export default function ConferenceTimerDisplay({ timerValue, textStyle: _textStyle }: IDisplayProps) {
    const { classes } = useStyles();

    return (
        <span className = { classes.timer }>{ timerValue }</span>
    );
}
