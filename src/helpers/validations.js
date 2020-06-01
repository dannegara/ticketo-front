export const addEventFormInitialValues = {
    title: '',
    description: '',
    event_date: '',
    event_time: '',
    country_id: '',
    city: '',
    address: '',
    price: ''
}

export const addEventValidation = values => {
    const errors = {};
    if(!values.title)
        errors.title = 'Required';
    if(!values.event_date)
        errors.event_date = 'Required';
    if(!values.event_time)
        errors.event_time = 'Required';
    if(!values.country_id)
        errors.country_id = 'Required';
    if(!values.city)
        errors.city = 'Required';
    if(!values.address)
        errors.address = 'Required';
    if(!values.price)
        errors.price = 'Required';
    if(!values.description)
        errors.description = 'Required';
    return errors;
}