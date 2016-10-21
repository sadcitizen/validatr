import stringify from './internal/stringify';

export default definition => message => (...options) => (value, fields) => {
    let error = typeof message === 'function' ? message(stringify(value), ...options) : message;
    let isValid = false;

    if (definition(value, ...options, fields)) {
        isValid = true;
        error = '';
    }

    return { isValid, error };
}
