import pointer from 'json-pointer';

export function formatError(error) {
    if (!error) {
        return { isError: false };
    }

    const fields = error ? error.fields : [];
    const isError = error ? error.code !== undefined : false;
    const code = isError ? error.code : null;
    const message = isError ? getErrorMessage(code) : '';
    const data = {};
    const output = { isError, code, message, data };

    for (const path in fields) {
        if ({}.hasOwnProperty.call(fields, path)) {
            pointer.set(output, `/${path}`, getErrorMessage(fields[path]));
        }
    }

    return output;
}

export function getErrorMessage(errorCode) {
    const commonMessages = {
        'REQUIRED'     : 'Field is required',
        'TOO_SHORT'    : 'The string is too short',
        'TOO_LONG'     : 'The string is too long',
        'FORMAT_ERROR' : 'Wrong format'
    };

    return commonMessages[errorCode] || errorCode;
}
