import React from 'react';
import { makeStyles } from 'tss-react/mui';

import { isMobileBrowser } from '../../../environment/utils';
import Icon from '../../../icons/components/Icon';
import { IconCheck } from '../../../icons/svg';

interface ICheckboxProps {
    /**
     * Whether the input is checked or not.
     */
    checked?: boolean;

    /**
     * Class name for additional styles.
     */
    className?: string;

    /**
     * Whether the input is disabled or not.
     */
    disabled?: boolean;

    /**
     * The id of the input.
     */
    id?: string;

    /**
     * The label of the input.
     */
    label: string;

    /**
     * The name of the input.
     */
    name?: string;

    /**
     * Change callback.
     */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles()((theme) => {
    return {
        formControl: {
            ...theme.typography.bodyLongRegular,
            color: '#000000', // changed for better view @cinewar
            display: 'inline-flex',
            alignItems: 'center',

            '&.is-mobile': {
                ...theme.typography.bodyLongRegularLarge,
            },
        },

        disabled: {
            cursor: 'not-allowed',
        },

        activeArea: {
            display: 'grid',
            placeContent: 'center',
            width: '24px',
            height: '24px',
            backgroundColor: 'transparent',
            marginRight: '15px',
            position: 'relative',
            cursor: 'pointer',
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.25)', // changed for better view @cinewar
            },

            '& input[type="checkbox"]': {
                appearance: 'none',
                backgroundColor: 'transparent',
                margin: '3px',
                font: 'inherit',
                color: 'theme.palette.icon03',
                width: '18px',
                height: '18px',
                border: '2px solid #E631FA',
                borderRadius: '3px',
                display: 'grid',
                placeContent: 'center',

                '&::before': {
                    content: 'url("")',
                    width: '18px',
                    height: '18px',
                    opacity: 0,
                    backgroundColor: '#E631FA', // changed for better view @cinewar
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 0,
                    borderRadius: '3px',
                    transition: '.2s',
                    color: 'red',
                },

                '&:hover': {
                    '&::before': {
                        backgroundColor: 'rgba(0,0,0,0.25)',
                    }, // changed for better view @cinewar
                },

                '&:checked::before': {
                    opacity: 1,
                },

                '&:disabled': {
                    backgroundColor: theme.palette.ui03,
                    borderColor: theme.palette.ui04,

                    '&::before': {
                        backgroundColor: theme.palette.ui04,
                    },
                },

                '&:checked+.checkmark': {
                    opacity: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    svg: {
                        width: '15px',
                        height: '15px',
                        margin: '2px',
                    },
                },
            },

            '& .checkmark': {
                position: 'absolute',
                left: '3px',
                top: '3px',
                opacity: 0,
                transition: '.2s',
            },

            '&.is-mobile': {
                width: '40px',
                height: '40px',

                '& input[type="checkbox"]': {
                    width: '24px',
                    height: '24px',

                    '&::before': {
                        width: '24px',
                        height: '24px',
                    },
                },

                '& .checkmark': {
                    left: '11px',
                    top: '10px',
                },
            },
        },
    };
});

const Checkbox = ({ checked, className, disabled, id, label, name, onChange }: ICheckboxProps) => {
    const { classes: styles, cx, theme } = useStyles();
    const isMobile = isMobileBrowser();

    return (
        <label className={cx(styles.formControl, isMobile && 'is-mobile', className)}>
            <div className={cx(styles.activeArea, isMobile && 'is-mobile', disabled && styles.disabled)}>
                <input checked={checked} disabled={disabled} id={id} name={name} onChange={onChange} type="checkbox" />
                <Icon
                    aria-hidden={true}
                    className="checkmark"
                    color={disabled ? theme.palette.icon03 : theme.palette.icon01}
                    size={18}
                    src={IconCheck}
                />
            </div>
            <div>{label}</div>
        </label>
    );
};

export default Checkbox;
