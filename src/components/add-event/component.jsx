import React from 'react';
import { Formik } from 'formik';
import Button from '../UI/button';
import './styles.scss';
import { addEventValidation, addEventFormInitialValues } from '../../helpers/validations';
import { getCountries } from '../../api/countries';
import { addEvent } from '../../api/event';

const ErrorMsg = ({ text }) => (
    <span className="error-msg">{text}</span>
)

const ImagePreview = ({ src, id }) => (
    !src ? (
        <label className="no-image" htmlFor={id}>
            Choose image
        </label>
    )
    : 
    <div className="image-container">
        <label htmlFor={id}>
            <img src={src} alt="poster" />
        </label>
    </div>
)

export default class extends React.Component {

    state = {
        file: null,
        filePreview: null,
        countries: []
    }

    async componentDidMount() {
        const { data: countries } = await getCountries();
        this.setState({ countries });
    }

    chooseImage = ({ target: { files } }) => {
        this.setState({
            file: files[0],
            filePreview: URL.createObjectURL(files[0])
        });
    }

    submitForm = async (values) => {
        const { file } = this.state;
        const formData = new FormData();
        for(let key in values) formData.append(key, values[key]);
        formData.append('poster', file);
        const { data } = await addEvent(formData);
        this.props.history.push(`/event/${data.id}`);
    }

    render() {
        const { filePreview, countries } = this.state;

        return (
            <div className="add-event-form">
                <h1>Create Event</h1>
                <Formik
                    validate={addEventValidation}
                    onSubmit={this.submitForm}
                    initialValues={addEventFormInitialValues}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <ImagePreview id="poster" src={filePreview} />
                        <input 
                            type="file"
                            name="poster"
                            onChange={this.chooseImage}
                            id="poster"
                        />
                        <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Title"
                        />
                        {errors.title && touched.title && <ErrorMsg text={errors.title} />}
                        <input 
                            type="date"
                            name="event_date"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.event_date}
                            placeholder="Date"
                        />
                        {errors.event_date && touched.event_date && <ErrorMsg text={errors.event_date} />}
                        <input 
                            type="time"
                            name="event_time"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.event_time}
                            placeholder="Time"
                        />
                        {errors.event_time && touched.event_time && <ErrorMsg text={errors.event_time} />}
                        <select name="country_id" onChange={handleChange} onBlur={handleBlur} value={values.country_id}>
                            {countries.map(country => (
                                <option value={country.id} key={country.id}>{country.country_name}</option>
                            ))}
                        </select>
                        {errors.country_id && touched.country_id && <ErrorMsg text={errors.country_id} />}
                        <input 
                            type="text"
                            name="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.city}
                            placeholder="City"
                        />
                        {errors.city && touched.city && <ErrorMsg text={errors.city} />}
                        <input 
                            type="text"
                            name="address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                            placeholder="Address"
                        />
                        {errors.address && touched.address && <ErrorMsg text={errors.address} />}
                        <input 
                            type="number"
                            name="price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                            placeholder="Price"
                        />
                        {errors.price && touched.price && <ErrorMsg text={errors.price} />}
                        <textarea 
                            name="description"
                            placeholder="Description"
                            onChange={handleChange}
                            onBlur={handleBlur}>
                        </textarea>
                        {errors.description && touched.description && <ErrorMsg text={errors.description} />}
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                )}
                </Formik>
            </div>
        )
    }
}