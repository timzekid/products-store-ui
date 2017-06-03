/* eslint guard-for-in:0 */

import pointer from 'json-pointer';

export function formatInvitingError(error, context) {
    if (!error) {
        return { isError: false };
    }

    const fields = error ? error.fields : [];
    const isError = error ? error.code !== undefined : false;
    const code = isError ? error.code : null;
    const message = isError ? getErrorMessage(code, context) : '';
    const data = {};
    const output = { isError, code, message, data };

    for (const path in fields) {
        pointer.set(output, path, getErrorMessage(fields[path], context));
    }

    return output;
}

export function getErrorMessage(errorCode, context = '') {
    const commonMessages = {
        'REQUIRED'                    : 'Field is required',
        'CANNOT_BE_EMPTY'             : 'At least one is needed',
        'TOO_LOW'                     : 'Value is too low',
        'TOO_SHORT'                   : 'The string is too short',
        'TOO_SMALL'                   : 'Value is too low',
        'FORMAT_ERROR'                : 'Wrong format',
        'NOT_UNIQUE'                  : 'This value is not unique',
        'WRONG_EMAIL'                 : 'Wrong e-mail address format',
        'TOO_HIGH'                    : 'The value is too high',
        'TOO_BIG'                     : 'The value is too high',
        'UNKNOWN_ERROR'               : 'Some error has occured',
        'WRONG_URL'                   : 'Wrong URL',
        'WRONG_ID'                    : 'There is now such entity',
        'EXCEEDED_NUMBER_OF_PASSINGS' : 'Number of passings exceeded',
        'ALREADY_SUBSCRIBED'          : 'You\'re already subscribed'
    };

    const contextMessages = {
        registration: {
            'NOT_UNIQUE' : 'User with this e-mail address has been already registered)'
        }
    };

    return context && contextMessages[context] && contextMessages[context][errorCode]
        ? contextMessages[context][errorCode]
        : commonMessages[errorCode] || errorCode;
}

export function getComplexErrorMessage(error) {
    if (error instanceof Array && error.length !== 0) {
        const uniqueErrorMessage = error.find((item) => !!item);
        const errorIndexes = [];

        error.forEach((item, i) => {
            if (item === uniqueErrorMessage) {
                errorIndexes.push(i + 1);
            }
        });

        return `${uniqueErrorMessage}: ${errorIndexes.join(', ')}`;
    }

    return error;
}
