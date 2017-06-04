import moment from 'moment';

export function formatProduct(product) {
    const formattedAccount =  {
        id             : product.id,
        name           : product.name,
        description    : product.description,
        color          : product.color,
        dateOfAddition : moment(product.createdAt).format('MMMM Do YYYY')
    };

    return formattedAccount;
}
