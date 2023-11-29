export const inputs = [
    {
        id: 'id',
        label: 'ID',
        type: 'text',
        value: 'test_notification_id',
    },
    {
        id: 'headline',
        label: 'Headline',
        type: 'text',
        value: 'This is the notification headline',
    },
    {
        id: 'copy',
        label: 'Copy',
        type: 'text',
        value: 'This is the notification copy',
    },
    {
        id: 'customerGroup',
        label: 'Customer Group ID',
        type: 'text',
        value: '',
    },
    {
        id: 'startDate',
        label: 'Start Date',
        type: 'datetime-local',
        value: '',
    },
    {
        id: 'endDate',
        label: 'End Date',
        type: 'datetime-local',
        value: '',
    },
    {
        id: 'targetPage',
        label: 'Target Page ( makeup, skincare, MUK20002192 etc )',
        type: 'text',
        value: '',
    },
]

export const icons = [
    {
        label: 'Advent',
        value: 'icon-snk-advent-notification',
        src: '/images/advent-notification.svg',
    },
    {
        label: 'Birthday',
        value: 'icon-snk-birthday-gift',
        src: '/images/birthday-gift.svg',
    },
    {
        label: 'Limitless',
        value: 'icon-snk-limitless-notification',
        src: '/images/limitless-notification.svg',
    },
    {
        label: 'Matches',
        value: 'icon-snk-matches-notification',
        src: '/images/matches-notification.svg',
    },
]

export const targetPageTypes = [
    {
        label: 'None',
        value: '',
    },
    {
        label: 'Product',
        value: 'pid',
    },
    {
        label: 'Content',
        value: 'cid',
    },
    {
        label: 'Folder',
        value: 'fdid',
    },
    {
        label: 'Category',
        value: 'cgid',
    },
    {
        label: 'Controller',
        value: 'cont',
    },
    {
        label: 'Full URL',
        value: 'url',
    },
 
]


export const requiredFields = ['id'];