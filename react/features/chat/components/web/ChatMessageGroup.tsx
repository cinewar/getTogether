import clsx from 'clsx';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

import Avatar from '../../../base/avatar/components/Avatar';
import { IMessage } from '../../types';

import ChatMessage from './ChatMessage';

interface IProps {

    /**
     * Additional CSS classes to apply to the root element.
     */
    className: string;
    /**
    * Added to identify message groups for color purposes. @cinewar
    */
    groupIndex?: number;
    /**
     * The messages to display as a group.
     */
    messages: Array<IMessage>;
}

const colors = [
    '#FA9696',
    '#FAFA96',
    '#FCA8FF',
    '#96BFFA',
    '#FFA8CF',
    '#FEC79C',
    '#A0CAFF',
];

const useStyles = makeStyles()(theme => {
    return {
        messageGroup: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',

            '&.remote, &.file': {
                maxWidth: 'calc(100% - 40px)', // 100% - avatar and margin
                marginLeft: '-25px',
                marginTop: '25px'
            }
        },

        groupContainer: {
            display: 'flex',

            '&.local': {
                justifyContent: 'flex-end',

                '& .avatar': {
                    display: 'none'
                }
            }
        },

        avatar: {
            margin: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(3)} 0`,
            position: 'sticky',
            flexShrink: 0,
            top: 0,
            boxShadow: theme.shadows[3] // changed for new design @cinewar
        }
    };
});


const ChatMessageGroup = ({ className = '', messages, groupIndex }: IProps) => {
    const { classes } = useStyles();
    const messagesLength = messages.length;

    if (!messagesLength) {
        return null;
    }

    console.log(messages, 'messages in ChatMessageGroup');

    return (
        <div className = { clsx(classes.groupContainer, className) }>
            <Avatar
                className = { clsx(classes.avatar, 'avatar') }
                customBg = { colors[groupIndex ? groupIndex % colors.length : 0] }
                participantId = { messages[0].participantId }
                size = { 32 } />
            <div className = { `${classes.messageGroup} chat-message-group ${className}` }>
                {messages.map((message, i) => (
                    <ChatMessage
                        bgColor = { colors[groupIndex ? groupIndex % colors.length : 0] } // Color based on groupIndex @cinewar
                        className = { className }
                        key = { i }
                        message = { message }
                        showDisplayName = { i === 0 }
                        showTimestamp = { i === messages.length - 1 } />
                ))}
            </div>
        </div>
    );
};

export default ChatMessageGroup;
